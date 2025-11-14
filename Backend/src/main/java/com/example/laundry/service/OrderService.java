package com.example.laundry.service;

import com.example.laundry.dto.OrderDto;
import com.example.laundry.dto.OrderItemDto;
import com.example.laundry.model.Order;
import com.example.laundry.model.OrderItem;
import com.example.laundry.model.OrderStatus;
import com.example.laundry.repository.OrderRepository;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class OrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<OrderDto> findAll() {
        return orderRepository.findAll().stream().map(this::toDto).collect(Collectors.toList());
    }

    public Optional<OrderDto> findById(@NonNull Long id) {
        return orderRepository.findById(id).map(this::toDto);
    }

    public OrderDto create(@NonNull OrderDto dto) {
        Order order = toEntity(dto);
        calculateTotal(order);
        @SuppressWarnings("null")
        Order saved = orderRepository.save(order);
        return toDto(saved);
    }

    public Optional<OrderDto> update(@NonNull Long id, @NonNull OrderDto dto) {
        return orderRepository.findById(id).map(existing -> {
            // update fields
            existing.setCustomerName(dto.getCustomerName());
            existing.setPhone(dto.getPhone());
            existing.setPickupAddress(dto.getPickupAddress());
            existing.setDeliveryAddress(dto.getDeliveryAddress());
            existing.setPickupTime(dto.getPickupTime());
            existing.setDeliveryTime(dto.getDeliveryTime());
            existing.setStatus(dto.getStatus() != null ? dto.getStatus() : existing.getStatus());

            // replace items
            existing.getItems().clear();
            if (dto.getItems() != null) {
                for (OrderItemDto itemDto : dto.getItems()) {
                    OrderItem item = new OrderItem();
                    item.setName(itemDto.getName());
                    item.setPrice(itemDto.getPrice());
                    item.setQuantity(itemDto.getQuantity());
                    existing.addItem(item);
                }
            }
            calculateTotal(existing);
            Order saved = orderRepository.save(existing);
            return toDto(saved);
        });
    }

    public void delete(@NonNull Long id) {
        orderRepository.deleteById(id);
    }

    public Optional<OrderDto> updateStatus(@NonNull Long id, @NonNull OrderStatus status) {
        return orderRepository.findById(id).map(o -> {
            o.setStatus(status);
            return toDto(orderRepository.save(o));
        });
    }

    // simple mapping methods
    private OrderDto toDto(Order order) {
        OrderDto dto = new OrderDto();
        dto.setId(order.getId());
        dto.setCustomerName(order.getCustomerName());
        dto.setPhone(order.getPhone());
        dto.setPickupAddress(order.getPickupAddress());
        dto.setDeliveryAddress(order.getDeliveryAddress());
        dto.setPickupTime(order.getPickupTime());
        dto.setDeliveryTime(order.getDeliveryTime());
        dto.setTotalPrice(order.getTotalPrice());
        dto.setStatus(order.getStatus());
        dto.setCreatedAt(order.getCreatedAt());
        if (order.getItems() != null) {
            dto.setItems(order.getItems().stream().map(this::toItemDto).collect(Collectors.toList()));
        }
        return dto;
    }

    private OrderItemDto toItemDto(OrderItem item) {
        OrderItemDto dto = new OrderItemDto();
        dto.setId(item.getId());
        dto.setName(item.getName());
        dto.setPrice(item.getPrice());
        dto.setQuantity(item.getQuantity());
        return dto;
    }

    private Order toEntity(OrderDto dto) {
        Order order = new Order();
        order.setCustomerName(dto.getCustomerName());
        order.setPhone(dto.getPhone());
        order.setPickupAddress(dto.getPickupAddress());
        order.setDeliveryAddress(dto.getDeliveryAddress());
        order.setPickupTime(dto.getPickupTime());
        order.setDeliveryTime(dto.getDeliveryTime());
        if (dto.getStatus() != null) order.setStatus(dto.getStatus());
        if (dto.getItems() != null) {
            for (OrderItemDto itemDto : dto.getItems()) {
                OrderItem item = new OrderItem();
                item.setName(itemDto.getName());
                item.setPrice(itemDto.getPrice());
                item.setQuantity(itemDto.getQuantity());
                order.addItem(item);
            }
        }
        calculateTotal(order);
        return order;
    }

    private void calculateTotal(Order order) {
        BigDecimal total = BigDecimal.ZERO;
        if (order.getItems() != null) {
            for (OrderItem i : order.getItems()) {
                if (i.getPrice() != null && i.getQuantity() != null) {
                    total = total.add(i.getPrice().multiply(BigDecimal.valueOf(i.getQuantity())));
                }
            }
        }
        order.setTotalPrice(total);
    }
}
