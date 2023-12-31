import 'dart:io';

import 'package:dart_frog/dart_frog.dart';
import 'package:flutter_news_example_api/api.dart';

Future<Response> onRequest(RequestContext context) async {
  // if (context.request.method != HttpMethod.get) {
  //   return Response(statusCode: HttpStatus.methodNotAllowed);
  // }

  final reqUser = context.read<RequestUser>();
  if (reqUser.isAnonymous) return Response(statusCode: HttpStatus.badRequest);

  final user = await context.read<NewsDataSource>().getUser(userId: reqUser.id);
  if (user == null) return Response(statusCode: HttpStatus.notFound);

  final response = CurrentUserResponse(user: user);
  return Response.json(body: response,headers: {
          'Access-Control-Allow-Origin': '*', // You can specify allowed origins here
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Allowed methods
          'Access-Control-Allow-Headers': 'Origin, Content-Type', // Allowed headers
        });
}
