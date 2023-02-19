package com.netgeniaweb.backend.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
class AuthController {

    final AuthService authService;

    @Autowired
    SimpleAppController(AuthService authService) {
        this.authService = authService;
    }

    @RequestMapping("/")
    String home() {
        return "home";
    }

    @RequestMapping("/restricted")
    String restricted() {
        return "restricted";
    }

    @RequestMapping("/admin")
    String admin() {
        authService.ensureAdmin();
        return "admin";
    }

}