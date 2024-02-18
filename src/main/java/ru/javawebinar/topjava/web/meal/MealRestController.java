package ru.javawebinar.topjava.web.meal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import ru.javawebinar.topjava.model.Meal;
import ru.javawebinar.topjava.model.User;
import ru.javawebinar.topjava.service.MealService;
import ru.javawebinar.topjava.to.MealTo;
import ru.javawebinar.topjava.util.MealsUtil;
import ru.javawebinar.topjava.web.SecurityUtil;

import java.util.List;

import static ru.javawebinar.topjava.util.ValidationUtil.assureIdConsistent;
import static ru.javawebinar.topjava.util.ValidationUtil.checkNew;

@Controller
public class MealRestController {

    protected final Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    private MealService service;

    private final int authUserId = SecurityUtil.authUserId();

    public List<MealTo> getAll(int userId) {
        log.info("getAll");
        return MealsUtil.getTos(service.getAll(authUserId), MealsUtil.DEFAULT_CALORIES_PER_DAY);
    }

    public Meal get(int id, int userId) {
        log.info("get {}", id);
        return service.get(id, authUserId);
    }

    public Meal create(Meal meal, int userId) {
        log.info("create {}", meal);
        checkNew(meal);
        return service.create(meal, userId);
    }

    public void delete(int id, int userId) {
        log.info("delete {}", id);
        service.delete(id, authUserId);
    }

    public void update(Meal meal, int userId) {
        log.info("update {} with id={}", meal, userId);
        assureIdConsistent(meal, userId);
        service.update(meal, authUserId);
    }

}