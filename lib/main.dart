import 'package:nehaljaisalmeria/pages/home_page.dart';
import 'package:nehaljaisalmeria/widgets/theme_inherited_widget.dart';
import 'package:flutter/material.dart';
import 'package:url_strategy/url_strategy.dart';

import 'config/themes.dart';

void main() {
  setPathUrlStrategy();
  runApp(MyApp());
} 

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ThemeSwitcherWidget(
      initialDarkModeOn: false,
      child: Adityadroid(),
    );
  }
}
class Adityadroid extends StatelessWidget {
  const Adityadroid({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Nehal Jaisalmeria',
      theme:ThemeSwitcher.of(context).isDarkModeOn?darkTheme(context):lightTheme(context),
      home: HomePage(),
    );
  }
}
