package com.example.laundry.controller;

import com.example.laundry.dto.OrderDto;
import com.example.laundry.model.OrderStatus;
import com.example.laundry.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @GetMapping
    public List<OrderDto> list() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDto> get(@PathVariable @NonNull Long id) {
        return service.findById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    @SuppressWarnings("null")
    public ResponseEntity<OrderDto> create(@NonNull @RequestBody OrderDto dto) {
        OrderDto created = service.create(dto);
        URI location = URI.create("/api/orders/" + created.getId());
        return ResponseEntity.created(location).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderDto> update(@PathVariable @NonNull Long id, @RequestBody @NonNull OrderDto dto) {
        return service.update(id, dto).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable @NonNull Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/status")
    @SuppressWarnings("null")
    public ResponseEntity<OrderDto> updateStatus(@PathVariable @NonNull Long id, @RequestParam @NonNull OrderStatus status) {
        return service.updateStatus(id, status).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
