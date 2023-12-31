import 'dart:async';

import 'package:analytics_repository/analytics_repository.dart';
import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:firebase_core/firebase_core.dart';
// import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:firebase_dynamic_links/firebase_dynamic_links.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_news_example/main/bootstrap/app_bloc_observer.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:hydrated_bloc/hydrated_bloc.dart';
import 'package:path_provider/path_provider.dart';
// import 'package:path_provider/path_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:shared_preferences_web/shared_preferences_web.dart';


typedef AppBuilder = Future<Widget> Function(
  FirebaseDynamicLinks firebaseDynamicLinks,
  FirebaseMessaging firebaseMessaging,
  SharedPreferences sharedPreferences,
  AnalyticsRepository analyticsRepository,
);

Future<void> bootstrap(AppBuilder builder) async {
  WidgetsFlutterBinding.ensureInitialized();
  if (kIsWeb) {
    await Firebase.initializeApp(
      options: const FirebaseOptions(
        apiKey: 'AIzaSyC87EwA7Gu-rZReF7AjbK14XP5OQEQ8xFU',
        appId: '1:1049715062144:web:da8ef2d14e72e79ea8fd65',
        messagingSenderId: '1049715062144',
        projectId: 'instagram-clone-57016',
        storageBucket: 'instagram-clone-57016.appspot.com'
      ),
    );
  } else {
    await Firebase.initializeApp();
  }
  final analyticsRepository = AnalyticsRepository(FirebaseAnalytics.instance);
  final blocObserver = AppBlocObserver(
    analyticsRepository: analyticsRepository,
  );
  Bloc.observer = blocObserver;
  // HydratedBloc.storage = await HydratedStorage.build(
  //   storageDirectory:await getapp()
  // );
      HydratedBloc.storage = await HydratedStorage.build(
       storageDirectory: kIsWeb
           ? HydratedStorage.webStorageDirectory
           : await getTemporaryDirectory(),
     );
  if (kDebugMode) {
    await HydratedBloc.storage.clear();
  }

  // await FirebaseCrashlytics.instance.setCrashlyticsCollectionEnabled(true);
  // FlutterError.onError = FirebaseCrashlytics.instance.recordFlutterError;

  final sharedPreferences = await SharedPreferences.getInstance();

  // await runZonedGuarded<Future<void>>(
  //   () async {
  //     unawaited(MobileAds.instance.initialize());
      runApp(
        await builder(
          FirebaseDynamicLinks.instance,
          FirebaseMessaging.instance,
          sharedPreferences,
          analyticsRepository,
        ),
      );
    //}//,
    //FirebaseCrashlytics.instance.recordError,
  //);
}

class MyIndexedDBStorage implements Storage {
  final store = 'my_bloc_storage';

  @override
  Future<void> write(String key, dynamic value) async {
    // final db = await databaseFactory.open(store, version: 1);
    // final transaction = db.transaction('states', 'readwrite');
    // final objectStore = transaction.objectStore('states');
    // await objectStore.put(value, key);
  }

  @override
  Future<dynamic> read(String key) async {
    // final db = await databaseFactory.open(store, version: 1);
    // final transaction = db.transaction('states', 'readonly');
    // final objectStore = transaction.objectStore('states');
    // final result = await objectStore.getObject(key);
    return null;
  }

  @override
  Future<void> clear() async {
    // final db = await databaseFactory.open(store, version: 1);
    // final transaction = db.transaction('states', 'readwrite');
    // final objectStore = transaction.objectStore('states');
    // await objectStore.clear();
  }
  
  @override
  Future<void> close() {
    // TODO: implement close
    throw UnimplementedError();
  }
  
  @override
  Future<void> delete(String key) {
    // TODO: implement delete
    throw UnimplementedError();
  }
}