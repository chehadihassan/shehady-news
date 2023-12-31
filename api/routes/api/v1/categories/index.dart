import 'dart:io';

import 'package:dart_frog/dart_frog.dart';
import 'package:flutter_news_example_api/api.dart';

Future<Response> onRequest(RequestContext context) async {
  // if (context.request.method != HttpMethod.get) {
  //   return Response(statusCode: HttpStatus.methodNotAllowed);
  // }

  final categories = await context.read<NewsDataSource>().getCategories();
  final response = CategoriesResponse(categories: categories);

  
  return Response.json(body: response,headers: {
          'Access-Control-Allow-Origin': '*', // You can specify allowed origins here
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Allowed methods
          'Access-Control-Allow-Headers': 'Origin, Content-Type', // Allowed headers
        });
}
