package com.coinhub.managers;

import com.airbnb.lottie.LottieAnimationView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by allen on 17/11/1.
 */

public class LottieViewManager extends SimpleViewManager<LottieAnimationView> {
    @Override
    public String getName() {
        return null;
    }

    @Override
    protected LottieAnimationView createViewInstance(ThemedReactContext reactContext) {
        return null;
    }
//
//    private static final String REACT_CLASS = "LottieAnimationView";
//    private static final int COMMAND_PLAY = 1;
//    private static final int COMMAND_RESET = 2;
//    @Override
//    public String getName() {
//        return REACT_CLASS;
//    }
//
//    @Override
//    protected LottieAnimationView createViewInstance(ThemedReactContext reactContext) {
//        return new LottieAnimationView(reactContext);
//    }
//
//
//    @ReactProp(name = "sourceName")
//    public void SetSourceName(LottieAnimationView view, String name) {
//        view.setAnimation(name);
//    }
//
//    @ReactProp(name = "progress", defaultFloat = 0f)
//    public void setProgress(LottieAnimationView view, float progress) {
//        view.setProgress(progress);
//    }
//
//    @ReactProp(name = "loop")
//    public void setLoop(LottieAnimationView view, boolean loop) {
//        view.loop(loop);
//    }
//
//    @Nullable
//    @Override
//    public Map<String, Integer> getCommandsMap() {
//        return MapBuilder.of(
//                "play", COMMAND_PLAY,
//                "reset", COMMAND_RESET
//        );
//    }
//
//    @Override
//    public void receiveCommand(final LottieAnimationView view, int commandId, @Nullable ReadableArray args) {
//        switch (commandId) {
//            case COMMAND_PLAY: {
//                new Handler(Looper.getMainLooper()).post(new Runnable() {
//                    @Override
//                    public void run() {
//                        if (ViewCompat.isAttachedToWindow(view)) {
//                            view.setProgress(0f);
//                            view.playAnimation();
//                        }
//                    }
//                });
//            }
//            break;
//            case COMMAND_RESET: {
//                new Handler(Looper.getMainLooper()).post(new Runnable() {
//                    @Override
//                    public void run() {
//                        if (ViewCompat.isAttachedToWindow(view)) {
//                            view.cancelAnimation();
//                            view.setProgress(0f);
//                        }
//                    }
//                });
//            }
//            break;
//        }
//    }
}
