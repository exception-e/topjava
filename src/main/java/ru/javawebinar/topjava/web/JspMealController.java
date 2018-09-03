package ru.javawebinar.topjava.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.GetMapping;
import ru.javawebinar.topjava.service.MealService;

public class JspMealController {

    @Autowired
    MealService mealService;

    @GetMapping("/")
    public String root() {
        return "index";
    }

    @GetMapping("/meals")
    public String delete(HttpRequest request)
    {

        return "";

    }
}
