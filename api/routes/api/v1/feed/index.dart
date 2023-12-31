import 'dart:io';

import 'package:dart_frog/dart_frog.dart';
import 'package:flutter_news_example_api/api.dart';

Future<Response> onRequest(RequestContext context) async {
  // if (context.request.method != HttpMethod.get) {
  //   return Response(statusCode: HttpStatus.methodNotAllowed);
  // }

  final queryParams = context.request.url.queryParameters;
  final categoryQueryParam = queryParams['category'];
  final category = Category.values.firstWhere(
    (category) => category.name == categoryQueryParam,
    orElse: () => Category.top,
  );
  final limit = int.tryParse(queryParams['limit'] ?? '') ?? 20;
  final offset = int.tryParse(queryParams['offset'] ?? '') ?? 0;
  final feed = await context
      .read<NewsDataSource>()
      .getFeed(category: category, limit: limit, offset: offset);
  final response = FeedResponse(
    feed: feed.blocks,
    totalCount: feed.totalBlocks,
  );
  return Response.json(body: response,headers: {
          'Access-Control-Allow-Origin': '*', // You can specify allowed origins here
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Allowed methods
          'Access-Control-Allow-Headers': 'Origin, Content-Type', // Allowed headers
        });
}
