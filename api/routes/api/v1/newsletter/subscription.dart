import 'dart:io';

import 'package:dart_frog/dart_frog.dart';

Response onRequest(RequestContext context) {
  // if (context.request.method != HttpMethod.post) {
  //   return Response(statusCode: HttpStatus.methodNotAllowed);
  // }

  return Response(statusCode: HttpStatus.created,headers: {
          'Access-Control-Allow-Origin': '*', // You can specify allowed origins here
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Allowed methods
          'Access-Control-Allow-Headers': 'Origin, Content-Type', // Allowed headers
        });
}
