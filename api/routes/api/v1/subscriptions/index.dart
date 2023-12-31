import 'dart:io';

import 'package:dart_frog/dart_frog.dart';
import 'package:flutter_news_example_api/api.dart';

Future<Response> onRequest(RequestContext context) async {
  if (context.request.method == HttpMethod.post) return _onPostRequest(context);
  if (context.request.method == HttpMethod.get) return _onGetRequest(context);

  return Response(statusCode: HttpStatus.methodNotAllowed,headers: {
          'Access-Control-Allow-Origin': '*', // You can specify allowed origins here
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Allowed methods
          'Access-Control-Allow-Headers': 'Origin, Content-Type', // Allowed headers
        });
}

Future<Response> _onPostRequest(RequestContext context) async {
  final subscriptionId = context.request.url.queryParameters['subscriptionId'];
  final user = context.read<RequestUser>();

  if (user.isAnonymous || subscriptionId == null) {
    return Response(statusCode: HttpStatus.badRequest);
  }

  await context.read<NewsDataSource>().createSubscription(
        userId: user.id,
        subscriptionId: subscriptionId,
      );

  return Response(statusCode: HttpStatus.created);
}

Future<Response> _onGetRequest(RequestContext context) async {
  final subscriptions = await context.read<NewsDataSource>().getSubscriptions();
  final response = SubscriptionsResponse(subscriptions: subscriptions);
  return Response.json(body: response,headers: {
          'Access-Control-Allow-Origin': '*', // You can specify allowed origins here
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Allowed methods
          'Access-Control-Allow-Headers': 'Origin, Content-Type', // Allowed headers
        });
}
