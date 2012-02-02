#include <QtGui/QApplication>
#include <QtGui/QMainWindow>
#include <QtGui/QMenuBar>
#include "html5applicationviewer.h"

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QRect viewerGeometry(0, 0, 1024, 768);

    Html5ApplicationViewer viewer;
    viewer.setWindowTitle(QString("Blackjack"));
    viewer.setOrientation(Html5ApplicationViewer::ScreenOrientationAuto);
    viewer.showExpanded();
    viewer.setGeometry(viewerGeometry);
    viewer.loadFile(QLatin1String("html/index.html"));

    return app.exec();
}
