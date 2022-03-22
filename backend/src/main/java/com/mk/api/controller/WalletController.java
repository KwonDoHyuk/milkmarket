package com.mk.api.controller;


import com.mk.api.dto.request.LoginReq;
import com.mk.api.dto.request.WalletReq;
import com.mk.api.dto.response.MessageRes;
import com.mk.api.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/wallets")
public class WalletController {
    private UserService userService;

    @Autowired
    public WalletController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/")
    public ResponseEntity<MessageRes> login(@RequestBody WalletReq walletReq) {
        MessageRes message = new MessageRes();
        if (userService.createWallet(walletReq)) {
            message.setMessage("지갑 생성 성공");
            message.setData(walletReq.getAddress());
            return new ResponseEntity<MessageRes>(message, HttpStatus.CREATED);
        }
        message.setMessage("지값 생성 실패");
        return new ResponseEntity<MessageRes>(message, HttpStatus.BAD_REQUEST);
    }
}
