import 'package:flutter/cupertino.dart';
import 'package:nehaljaisalmeria/config/assets.dart';
import 'package:nehaljaisalmeria/tabs/about_tab.dart';
import 'package:nehaljaisalmeria/tabs/blog_tab.dart';
import 'package:nehaljaisalmeria/tabs/certificates.dart';
import 'package:nehaljaisalmeria/tabs/projects_tab.dart';
import 'package:nehaljaisalmeria/widgets/theme_inherited_widget.dart';
import 'package:flutter/material.dart';
class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _selectedIndex = 0;
  static List<Widget> tabWidgets = <Widget>[
    AboutTab(),
    ProjectsTab(),
    CertificatesTab(),
  ];

  @override
  void initState() {
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          actions: <Widget>[
            IconButton(
              color: Colors.white,
              icon: ThemeSwitcher.of(context).isDarkModeOn ? Image.asset(Assets.sun,height: 200,width: 200) : Image.asset(Assets.moon,height: 20,width: 20),
              onPressed: ()=> ThemeSwitcher.of(context).switchDarkMode(),
            )
          ],
        ),
        body: Center(
          child: tabWidgets.elementAt(_selectedIndex),
        ),
        bottomNavigationBar: BottomNavigationBar(
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(Icons.account_circle),
              label: 'About',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.mobile_screen_share),
               label: 'Projects',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.pages),
               label: 'Certificates',
            ),
          ],
          currentIndex: _selectedIndex,
          onTap: (index)=> setState(() => _selectedIndex = index),
          selectedItemColor: Theme.of(context).accentColor,
        ),
    );
  }

}
