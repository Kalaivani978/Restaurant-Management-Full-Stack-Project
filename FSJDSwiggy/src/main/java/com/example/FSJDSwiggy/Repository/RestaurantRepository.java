package com.example.FSJDSwiggy.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.FSJDSwiggy.Model.Restaurant;

/* To use the hibernate method we have extended the JPA respository */
@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant,Integer>{
  List<Restaurant> findByResNameContaining(String resName);
  List<Restaurant> findByfoodType(String foodType);
}
