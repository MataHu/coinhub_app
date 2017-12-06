package com.coinhub.module;

import android.content.Intent;

import com.coinhub.activity.CustomQrActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.uuzuche.lib_zxing.activity.CaptureActivity;

/**
 * Created by allen on 17/10/18.
 */

public class QrCodeMoudle extends ReactContextBaseJavaModule {
    public static final int REQUEST_CODE = 0x111;
    public QrCodeMoudle(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "qrCode";
    }

    @ReactMethod
    public void openCamera () {
        Intent intent = new Intent(getCurrentActivity(), CaptureActivity.class);
        getCurrentActivity().startActivityForResult(intent, REQUEST_CODE);
    }

    @ReactMethod
    public void openCustomCamera () {
        Intent intent = new Intent(getCurrentActivity(), CustomQrActivity.class);
        getCurrentActivity().startActivityForResult(intent, REQUEST_CODE);
    }
}
