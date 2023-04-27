package com.example.FSJDSwiggy.Controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.FSJDSwiggy.ExceptionHandling.ResourceNotFoundException;
import com.example.FSJDSwiggy.Model.Restaurant;
import com.example.FSJDSwiggy.Repository.RestaurantRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Swiggy")
public class RestaurantController {
	/*  The controller class only predict which method going to execute based on the mapping.
	 * Each one having the different mapping. Here we have used the parent mapping as /Swiggy.
	 * Annotations:
	 * @CrossOrgin is used to indicate the origins mapping
	 * @RestController is a combination of both response body and controller.
	 * @Autowired is used.
	 * @postMapping is used to create the data.
	 * @GetMapping is used to get the data
	 * @PutMapping is used to update the data.
	 * @DeleteMapping is used to delete the data.
	 */

	@Autowired
	private RestaurantRepository resRepo;

	/*
	 * PostMapping is used to create the record. It will get the data from user as an object and save
	 * it in database using save hibernate method.
	 */
	@PostMapping("/Restaurants")
	public Restaurant createHotel(@RequestBody Restaurant res) {
		return resRepo.save(res);
	}

	/*
	 * GetMapping by id is used to get the data for the particular id. If Id matches, it will return
	 * the record as a object with Ok status code. If not it will throw exception.
	 */
	@GetMapping("/Restaurants/{id}")
	public ResponseEntity<Restaurant> getHotelById(@PathVariable int id) {
		Restaurant resSearch= resRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));
		return ResponseEntity.ok(resSearch);
	}
	/*
	 * Below PutMapping is used to update the record using id. If the id is not there, it will throw the 
	 * exception. If id matches it will update the record using save hibernate method.
	 */

	@PutMapping("/Restaurants/{id}")
	public ResponseEntity<Restaurant> updateHotel(@PathVariable int id, @RequestBody Restaurant hotel){
		Restaurant resUpd = resRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));

		resUpd.setFoodType(hotel.getFoodType());
		resUpd.setLocation(hotel.getLocation());
		resUpd.setResName(hotel.getResName());

		Restaurant updatedRes = resRepo.save(resUpd);
		return ResponseEntity.ok(updatedRes);
	}
	/*
	 * Below DeleteMapping is used to delete a particular record using the id. First it will find the 
	 * record with the id. If it is match, it will remove the record using delete hibernate method
	 * and will print the http status as deleted. If it is not there
	 * it will throw an exception.
	 */

	@DeleteMapping("/Restaurants/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteHotels(@PathVariable int id){
		Restaurant delHotel=resRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));

		resRepo.delete(delHotel);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	/*
	 * Below delete mapping is used to delete all the method from the database using deleteAll 
	 * hibernate method. Exception are handled through try and catch.
	 * 
	 */
	@DeleteMapping("/Restaurants")
	public ResponseEntity<HttpStatus> deleteAllHotels(){
		try {
			resRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);

		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/*
	 * Below get mapping fetch data based on the restaurant name. Exception are handled using
	 * try and catch.
	 *  
	 */
	@GetMapping("/Restaurants")
	public ResponseEntity<List<Restaurant>> getAllRestaurants(@RequestParam(required=false)String resName){
		try {
			List<Restaurant> resList =new ArrayList<Restaurant>();
			if(resName!=null) {
				resRepo.findByResNameContaining(resName).forEach(resList::add);
				return new ResponseEntity<>(resList, HttpStatus.OK);

			}else {
				resList =resRepo.findAll();
				return new ResponseEntity<>(resList,HttpStatus.OK);
			}
		}catch(Exception e){
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}
	/*
	 * GetMapping veg is used to get the veg restaurant list. It will check the
	 * foodtype. If it is veg, it will save it in the vegHotelList and return it with status
	 * ok. If not there, it will show as No_Content. If any exception occur, it will handled by
	 * catch.
	 */
	@GetMapping("/Restaurants/veg")
	public ResponseEntity<List<Restaurant>> findByVegHotel(){
		try {
			List<Restaurant> vegHotelList=resRepo.findByfoodType("veg");
			if(vegHotelList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}
			return new ResponseEntity<>(vegHotelList,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}
	/*
	 *  GetMapping nonveg is used to get the nonveg restaurant list. It will check the
	 * foodtype. If it is nonveg, it will save it in the nonVegHotelList and return it with status
	 * ok. If not there, it will show as No_Content. If any exception occur, it will handled by
	 * catch. 
	 *  */
	@GetMapping("/Restaurants/nonveg")
	public ResponseEntity<List<Restaurant>> findByNonVegHotel(){
		try {
			List<Restaurant> nonVegHotelList=resRepo.findByfoodType("nonveg");
			if(nonVegHotelList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}
			return new ResponseEntity<>(nonVegHotelList,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}

}
