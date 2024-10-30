package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brandname;

    private String name;

    private String color;

    private String type;

    private String transmission;

    private String modelyear;

    private String price;

    private String description;

    @Lob
    @Column(name="image",columnDefinition = "LONGBLOB")
    private byte[] image;


}
