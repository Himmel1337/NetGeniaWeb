package com.netgeniaweb.backend.auth;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @PreAuthorize("hasRole(@roles.ADMIN)")
    public boolean ensureAdmin() {
        return true;
    }
}