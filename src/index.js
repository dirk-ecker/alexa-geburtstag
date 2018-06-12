const Alexa = require('alexa-sdk')
const APP_ID = ''

const languageStrings = {
  'de-DE': {
    'translation': {
      'SKILL_NAME': 'Wunsch zum Geburtstag',

      'HELP_MESSAGE': "Ich lese Dir einen zufälligen Geburtstagswunsch vor.",
      'STOP_MESSAGE': 'Tschüss'
    }
  }
}


const wishes = [
  {
    "author": "Lucius Annaeus Seneca",
    "text": "Manche Zeit wird uns entrissen, manche gestohlen,manche verrinnt einfach.  Am schändlichsten ist jedoch ein Verlust,der durch Nachlässigkeit entsteht.  "
  },
  {
    "author": "Friedrich Hebbel",
    "text": "Man altert nur von fünfundzwanzig bis dreißig.  Was sich bis dahin erhält, wird sich wohl auf immer erhalten.  "
  },
  {
    "author": "Robert Musil",
    "text": "Keine Grenze verlockt uns mehr zum Schmuggelnals die Altersgrenze.  "
  },
  {
    "author": "Epiktet",
    "text": "Weise ist der Mensch,der nicht den Dingen nachtrauert, die er nicht besitzt,sondern sich der Dinge erfreut, die er hat.  "
  },
  {
    "author": "Winston Churchill",
    "text": "Ein kluger Mann macht nicht alle Fehler selbst.  Er gibt auch anderen eine Chance.  "
  },
  {
    "author": "Friedrich Nietzsche",
    "text": "Ein Buch, das man liebt,darf man nicht leihen,sondern muss es besitzen.  "
  },
  {
    "author": "Albert Schweitzer",
    "text": "Du bist so jung wie deine Zuversicht,so alt wie deine Zweifel,so jung wie deine Hoffnung,so alt wie deine Verzagtheit.  "
  },
  {
    "author": "Konfuzius",
    "text": "Der Mensch hat dreierlei Wege, klug zu handeln:erstens durch Nachdenken, das ist der edelste;zweitens durch Nachahmen, das ist der leichteste;drittens durch Erfahrung, das ist der bitterste.  "
  },
  {
    "author": "Christian Morgenstern",
    "text": "Den Charakter eines Menschenerkennt man an den Scherzen,die er übel nimmt.  "
  },
  {
    "author": "Marie von Ebner-Eschenbach",
    "text": "Wenn die Zeit kommt, in der man könnte,ist die vorüber, in der man kann.  "
  },
  {
    "author": "Friedrich von Schiller",
    "text": "Es haben alle Dich so gern,die Alten und die Jungen,und Deinen lieben, braven Herrnist alles wohl gelungen.  "
  },
  {
    "author": "Epikur",
    "text": "Unter allem, was zu einem glücklichen Leben beiträgt,gibt es kein größeres Gut, keinen größeren Reichtumals die Freundschaft.  "
  },
  {
    "author": "Plutarch",
    "text": "Ein angenehmes und heiteres Lebenkommt nicht von äußeren Dingen,der Mensch bringt aus seinem Innernwie aus einer Quelle Lust und Freude in sein Leben.  "
  },
  {
    "author": "Gotthold Ephraim Lessing",
    "text": "Alter, tanze, trotz den Jahren!Welche Freude, wenn es heißt:Alter, du bist alt an Haaren,blühend aber ist dein Geist.  "
  },
  {
    "author": "Rainer Maria Rilke",
    "text": "Ich lebe mein Leben in wachsenden Ringen,die sich über die Dinge ziehn.  Ich werde den letzten vielleicht nicht vollbringen,aber versuchen will ich ihn.  "
  },
  {
    "author": "William Shakespeare",
    "text": "Was die Zeit dem Menschen an Haar entzieht,ersetzt sie ihm an Witz.  "
  },
  {
    "author": "Otto Fürst von Bismarck",
    "text": "Es ist ein Vorteil des Altwerdens, dass man gegen Hass, Beleidigungen, Verleumdungen gleichgültig wird, während die Empfänglichkeit für Liebe und Wohlwollen stärker wird.  "
  },
  {
    "author": "Mahatma Gandhi",
    "text": "Es gibt Wichtigeres im Leben,als beständig dessen Geschwindigkeit zu erhöhen.  "
  },
  {
    "author": "Franz Kafka",
    "text": "Die Jugend ist glücklich, weil sie fähig ist, Schönheit zu erkennen.  Jeder, der sich die Fähigkeit erhält, Schönes zu erkennen, wird nie alt werden.  "
  },
  {
    "author": "Montesquieu",
    "text": "Wie schade, dass so wenig Raum ist zwischen der Zeit wo man zu jung,und der, wo man zu alt ist.  "
  },
  {
    "author": "Jean de la Bruyère",
    "text": "Jugend ist oft arm: Man hat noch nichts erworben oder noch nichts geerbt.  Reichtum und Alter finden sich zu gleicher Zeit ein: So selten geschieht es,dass Menschen alles Gute auf einmal haben!"
  },
  {
    "author": "Arthur Schopenhauer",
    "text": "Man muss alt geworden sein, also gelebt haben,um zu erkennen, wie kurz das Leben ist.  "
  },
  {
    "author": "Rainer Maria Rilke",
    "text": "Jeder Tag ist ein neues Leben, jedes Erwachen und Aufstehen eine kleine Geburt, und jedes Zubettgehen und Einschlafen ein kleiner Tod.  "
  },
  {
    "author": "Marie von Ebner-Eschenbach",
    "text": "Man bleibt jung, so lange man noch lernen,neue Gewohnheiten annehmen und Widerspruch ertragen kann.  "
  },
  {
    "author": "Ambrose Bierce",
    "text": "Das Alter ist jene Lebensperiode, in der wir die Sünden,die wir noch begehen, dadurch wettmachen, dass wir jene verabscheuen,die zu begehen wir nicht mehr imstande sind.  "
  },
  {
    "author": "Heinrich Heine",
    "text": "Lasst mich nicht ein alter Polterer werden,der aus Neid die jüngeren Geister ankläfft,oder ein matter Jammermensch,der über die gute, alte Zeit beständig flennt.  "
  },
  {
    "author": "Victor Hugo",
    "text": "Die Geburtswehen der Zukunftgehören zu den Visionen des Philosophen.  "
  },
  {
    "author": "Martin Luther",
    "text": "Der Mensch bleibt närrisch bis ins vierzigste Jahr;wenn er dann anfängt, seine Narrheit zu erkennen,so ist das Leben schon dahin.  "
  },
  {
    "author": "Arthur Schopenhauer",
    "text": "Besonders in der Jugend fixiert sich das Ziel unseres Glückes in Gestalt einiger Bilder,die uns vorschweben und oft das halbe, ja das ganze Leben verharren.  Sie sind eigentlich neckende Gespenster: Denn, haben wir sie erreicht, so zerrinnen sie in nichts,indem wir die Erfahrung machen, dass sie gar nichts, von dem, was sie verhiessen, leisten.  "
  },
  {
    "author": "Montesquieu",
    "text": "Nur die wertvollen Menschen bleiben bei ihresgleichen in guter Stimmung.  "
  },
  {
    "author": "Ludwig Börne",
    "text": "Für die, welche an keine Unsterblichkeit glauben,gibt es auch keine.  "
  },
  {
    "author": "Leo Nikolajewitsch Graf Tolstoi",
    "text": "Im hohen Alter, so glauben gewöhnlich die anderen,oft aber auch die Greise selbst, lebt man nur die einem noch verbleibende Zeit ab.  Das Gegenteil ist der Fall, das hohe Alter ist,sowohl für die alten Menschen selbst wie auch für die anderen der wertvollste und notwendigste Lebensabschnitt.  Der Wert unseres Lebens ist der Entfernung vom Tod quadratisch umgekehrt proportional.  Es wäre schön, wenn die alten Menschen selbst und auch ihre Umgebung dies begriffen.  "
  },
  {
    "author": "Menander",
    "text": "Es lebt nur der, der lebend sich am Leben freut.  "
  },
  {
    "author": "Sprichwort",
    "text": "Wer morgens dreimal schmunzelt,mittags nicht die Stirne runzelt,abends singt, dass alles schallt,der wird 100 Jahre alt.  "
  },
  {
    "author": "Jean-Jacques Rousseau",
    "text": "Nicht der Mensch hat am meisten gelebt, welcher die höchsten Jahre zählt, sondern derjenige, welcher sein Leben am meisten empfunden hat.  "
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "text": "Der Strauß, den ich gepflücket,Grüße dich vieltausendmal!Ich habe mich oft gebücket,Ach, wohl eintausendmal,Und ihn ans Herz gedrücketWie hunderttausendmal!"
  },
  {
    "author": "Irischer Segenswunsch",
    "text": "Mein Wunsch für dich ist,dass du in deinem Herzen dankbar bewahrst -alle kostbaren Erinnerungen an dein Leben.  "
  },
  {
    "author": "Friedrich Wilhelm Güll",
    "text": "Im Garten blüh'n schon ein WeilchenSchneeglöckchen, Krokus und Veilchen.  Da hab ich mich nicht lang bedachtund ein schönes Sträußchen zurechtgemacht.  Das bringe ich dir zum Geburtstagsfest.  Der Frühling dich schön grüßen lässt.  Er sagt, mit allem Sonnenscheinkehrt er so gern bei dir ein,damit dein neues Lebensjahrsei sonnig, fröhlich, hell und klar.  "
  },
  {
    "author": "Irischer Segenswunsch",
    "text": "Möge es in deinem Leben keine verschenkten Tagegeben, aber viele, die du anderen schenkst.  "
  },
  {
    "author": "Emanuel Geibel",
    "text": "Die Zeit ist wie ein Bild vom Mosaik,zu nah beschaut, verwirrt es nur den Blick:Willst Du des Ganzen Art und Sinn verstehn,so musst Du's, Freund, aus rechter Ferne sehn.  "
  },
  {
    "author": "Rainer-Maria Rilke",
    "text": "Du musst das Leben nicht verstehen,dann wird es werden wie ein Fest.  Und lass’ Dir jeden Tag geschehenso wie ein Kind im Weitergehenvon jedem Wehensich viele Blüten schenken läßt.  Sie aufzusammeln und zu sparen,das kommt dem Kind nicht in den Sinn.  Es löst sie leise aus den Haaren,drin sie so gern gefangen waren,und hält den lieben jungen Jahrennach neuen seine Hände hin.  "
  },
  {
    "author": "William Somerset Maugham",
    "text": "Jede Generation lächelt über die Väter,lacht über die Großväterund bewundert die Urgroßväter.  "
  },
  {
    "author": "Joseph Victor von Scheffel",
    "text": "Die Falten um die Stirne dein,laß sie nur heiter ranken;das sind die Narben, die dareingeschlagen die Gedanken.  "
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "text": "Dem schönen Tag sei es geschrieben!Oft glänze dir sein heiteres Licht.  Uns hörtest du nicht auf zu liebendoch bitten wir: Vergiß uns nicht!"
  },
  {
    "author": "Matthias Claudius",
    "text": "Ihr Leute, groß und klein, ihr wisst,dass heute unser Festtag istund dass wir feiern müssen.  So fangt nur gleich frühmorgens anund bis die Stern am Himmel stehn,und singt und springt und springt und singt.  "
  },
  {
    "author": "Denk heute niemand an Gefahr,",
    "text": "und ob wir über hundert Jahrden Tag noch feiern werden.  Wir haben ihn ja heute noch,Gott sei gelobt! so braucht ihn doch,und macht uns heut das Herz nicht krank und schwer.  "
  },
  {
    "author": "Denn freilich! alles Ding vergeht,",
    "text": "auch unser Festtag nicht besteht,er wird uns endlich fehlen.  Doch nicht so bald – fleht und hofft,er soll noch wiederkommen oft,soll oft noch wiederkommen!"
  },
  {
    "author": "Platon",
    "text": "Der Blick des Verstandes fängt an scharf zu werden,wenn der Blick der Augen an Schärfe verliert.  "
  },
  {
    "author": "Jüdische Weisheit",
    "text": "Ein alter Wunsch,der älteste auf Erden:Die Jungen möchten alt,verjüngt die Alten werden.  "
  },
  {
    "author": "Irischer Segenswunsch",
    "text": "Mögest du ein Lied in deinem Herzen haben,ein Lächeln auf deinen Lippen tragenund nichts als Freude in deinen Händen halten.  "
  },
  {
    "author": "Theodor Fontane",
    "text": "Man wird nicht besser mit den Jahren. Wie sollte es auch, man wird bequem und bringt,um sich die Reue zu sparen,die Fehler all in ein System. "
  },
  {
    "author": "Albert Einstein",
    "text": "Solange man jung ist, gehören alle Gedanken der Liebespäter gehört alle Liebe den Gedanken. "
  },
  {
    "author": "Unbekannt",
    "text": "Älter werden schliesslich alle, doch eines gilt in jedem Falle:Jeweils alle Lebenszeiten haben ganz besondere Seiten. Wer sie sinnvoll nutzt mit Schwung,der bleibt 100 Jahre jung. "
  },
  {
    "author": "Arthur Schopenhauer",
    "text": "Statt mit Plänen und Sorgen für die Zukunft ausschliesslichund immerdar beschäftigt zu sein oder aber uns der Sehnsucht nach der Vergangenheit hinzugeben,sollten wir nie vergessen, dass die Gegenwart allein real und allein gewiss ist. "
  },
  {
    "author": "Sprichwort (Irland)",
    "text": "Ich wünsche dir: dass du liebst, als hätte dich noch nie jemand verletzt,dass du tanzt, als würde keiner hinschauen, dass du singst,als würde keiner zuhören, dass du lebst, als wäre das Paradies hier auf Erden. "
  },
  {
    "author": "Marie von Ebner-Eschenbach",
    "text": "In der Jugend meinen wir, das Geringste, das die Menschen uns gewähren können, sei Gerechtigkeit. Im Alter erfahren wir, dass es das Höchste ist. "
  },
  {
    "author": "Wilhelm Busch",
    "text": "Je älter man wird,desto hastiger tritt sie einem auf die Hacken,die Zeit, die so genannte. "
  },
  {
    "author": "Theodor Fontane",
    "text": "Je älter ich werde,desto tiefer empfinde ich, alles ist Glück und Gnade,das Kleine so gut wie das Grosse. "
  },
  {
    "author": "Unbekannt",
    "text": "Mögest du leben, so lange du willstund es wollen, so lange du lebst. "
  },
  {
    "author": "Johann Nepomuk Nestroy",
    "text": "In der Jugend hat man für grenzenlose Wünsche noch grenzenlose Hoffnungen,später bleiben die grenzenlosen Wünsche, aber die Vernunft löscht die Hoffnung aus,und die ungestümen Wünsche müssen sich nach und nach an der schroffen Wand der Hoffnungslosigkeit den Schädel einstossen. "
  },
  {
    "author": "Unbekannt",
    "text": "Lass dich heut mit allem Schönen, so wie du es verdienst, verwöhnen. Und wir wünschen dir, und nicht nur heut, alles, was dein Herz erfreut. "
  },
  {
    "author": "Sokrates",
    "text": "Bedenke stets, dass alles vergänglich ist;dann wirst du im Glück nicht zu fröhlich und im Leid nicht zu traurig sein. "
  },
  {
    "author": "Ludwig Börne",
    "text": "Die Erfahrung gleicht einer unerbittlichen Schönen. Jahre gehen vorüber, bis du sie gewinnst, und ergibt sie sich endlich,seid ihr beide alt geworden, und ihr könnt euch nicht mehr brauchen. "
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "text": "Ein Mädchen und ein Gläschen Wein kurieren alle Not. Und wer nicht trinkt und wer nicht küsst,der ist so gut wie tot. "
  },
  {
    "author": "Franz Grillparzer",
    "text": "Werde, was du noch nicht bist,bleibe, was du jetzt schon bist. In diesem Bleiben und diesem Werdenliegt alles Schöne hier auf Erden. "
  },
  {
    "author": "Immanuel Kant",
    "text": "Je mehr du gedacht, je mehr du getan hast,desto länger hast du gelebt. "
  },
  {
    "author": "Wilhelm Busch",
    "text": "Jede Gabe sei begrüßt,doch vor allen Dingen;das, worum Du Dich bemühst,möge Dir gelingen. "
  },
  {
    "author": "Friedrich Morgenroth",
    "text": "Meine kurzen Wünsche sindeine gute Sacheheute fürs Geburtstagskind:Lebe! Liebe! Lache!"
  },
  {
    "author": "Conrad Ferdinand Meyer",
    "text": "Was langsam reift,das altert spät!"
  },
  {
    "author": "Antoine de Saint-Exupéry",
    "text": "Es ist gut, wenn uns die verrinnende Zeitnicht als etwas erscheint,das uns verbraucht oder zerstört,sondern als etwas, das uns vollendet. "
  },
  {
    "author": "Theodor Fontane",
    "text": "Kummer, sei lahm! Sorge, sei blind!Es lebe das Geburtstagskind!"
  },
  {
    "author": "Theodor Fontane",
    "text": "Man wird nicht älter sondern besser!"
  },
  {
    "author": "Franz Kafka",
    "text": "Die Jugend ist glücklich, weil sie fähig ist, Schönheit zu erkennen. Jeder, der sich die Fähigkeit erhält, Schönes zu erkennen, wird nie alt werden. "
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "text": "Wenn man älter wird, muss man mit Bewusstseinauf einer gewissen Stufe stehen bleiben"
  },
  {
    "author": "Friedrich von Schiller",
    "text": "Sag selbst, was ich dir wünschen soll,ich weiß nichts zu erdenken. Du hast ja Küch' und Keller voll,nichts fehlt in deinen Schränken. "
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "text": "Wer mit dem Leben spielt,kommt nie zurecht,wer sich nicht selbst befiehlt,bleibt immer ein Knecht. "
  },
  {
    "author": "Adlai E. Stevenson",
    "text": "Nicht die Jahre in unserem Leben zählen,sondern das Leben in unseren Jahren zählt. "
  },
  {
    "author": "Unbekannt",
    "text": "Zum Geburtstag recht viel Glück,immer vorwärts, nie zurück,wenig Arbeit recht viel Geld,grosse Reisen in die Welt,jeden Tag gesund sich fühlen,sechs Richtige im Lotto spielen,ab und zu ein Gläschen Wein,dann wirst du immer glücklich sein. "
  },
  {
    "author": "Albert Schweizer",
    "text": "Mit zwanzig Jahren hat jeder das Gesicht, dass Gott ihm gegeben hat,mit vierzig das Gesicht, das ihm das Leben gegeben hat,und mit sechzig das Gesicht, das er verdient. "
  },
  {
    "author": "Alfred Kerr",
    "text": "Ich halte Rast auf meiner Fahrtund schaudre, dass ich [ALTER] ward. Ich dachte, dass auf Erdennur andere [ALTER] werden. Die Zeit vertost, die Ahnung spricht:So stirbst du einstund glaubst es nicht. "
  },
  {
    "author": "Sprichwort (deutsch)",
    "text": "Wer morgens nüchtern dreimal schmunzelt,wenns regnet nicht die Stirne runzeltund abends lacht, so dass es schallt,wird 120 Jahre alt. "
  },
  {
    "author": "Konfuzius",
    "text": "Der Edle verlangt alles von sich selbst,der Unedle erwartet alles von den anderen. "
  },
  {
    "author": "Frank von Schillerberg-Gosheim",
    "text": "Mit deiner Geburt hat man mir ein großes Geschenk gemacht. "
  },
  {
    "author": "Jole von Weißenberg",
    "text": "Die Jahre ziehen zwar ins Land,doch du bewahrst dir den Verstand. Trotz nachlassender Körperkraftstehst du noch voll im Lebenssaft. "
  },
  {
    "author": "Frank von Schillerberg-Gosheim",
    "text": "Guter Wein reift auch erst mit den Jahren. "
  },
  {
    "author": "Jole von Weißenberg",
    "text": "Zahlen lügen zwar nicht,doch lässt sich das Leben nicht daran bemessen. "
  },
  {
    "author": "Frank von Schillerberg-Gosheim",
    "text": "Wenn ich nicht so unmusikalisch wäre,würde ich dir ein Geburtstagsständchen komponieren. "
  },
  {
    "author": "Wolf Dietrich",
    "text": "Lebensjahre machen weiseund rüsten für die Weiterreise. "
  },
  {
    "author": "Frank von Schillerberg-Gosheim",
    "text": "Wer reich an Jahren ist,ist auch reich an Erfahrung. "
  },
  {
    "author": "Jole von Weißenberg",
    "text": "Mit jedem neuen Lebensjahrbeginnt die Zukunft, ist ja klar. "
  },
  {
    "author": "Frank von Schillerberg-Gosheim",
    "text": "Man soll die Feste feiern, wie sie fallen. Der eigene Geburtstag fällt leider immer auf denselben Tag. "
  },
  {
    "author": "Wolf Dietrich",
    "text": "Du hast dir ganz schön viel Zeit gelassenmit der ersten Einladung an mich!"
  },
  {
    "author": "Frank von Schillerberg-Gosheim",
    "text": "Einem geschenkten Gaul schaut man nicht ins Maul …Aber du mir nach diesem Geschenk hoffentlich noch in die Augen!Anzeige"
  },
  {
    "author": "Jole von Weißenberg",
    "text": "Eigentlich sollte man nicht jedes Jahr den Tag seiner Geburt feiern,ondern jeden einzelnen Tag, an dem das Leben neu beginnt. "
  },
  {
    "author": "Frank von Schillerberg-Gosheim",
    "text": "Warum wirst du eigentlich nicht älter,sondern immer nur schlauer und schöner?"
  },
  {
    "author": "Wolf Dietrich",
    "text": "Die anderen wünschen dir viel Glück,ich mir mein Schäufelchen zurück. Dann würd ich dir, wie einst im Sand,ein Schloss bauen mit Meisterhand. "
  },
  {
    "author": "Frank von Schillerberg-Gosheim",
    "text": "Früher war nicht alles besser,es war nur vieles einfach neu!"
  },
  {
    "author": "Jole von Weißenberg",
    "text": "Auch wenn die Zeit wie im Flug vergeht:für Küsschen ist es nie zu spät!"
  },
  {
    "author": "Irischer Segenswunsch",
    "text": "Glücklich sein ist wie eine herrliche Süßspeise. Möge Dir das Leben mehr davon geben,als Du je aufessen kannst. "
  },
  {
    "author": "Jonathan Swift",
    "text": "Kein kluger Mann hat jemals gewünscht, jünger zu sein. "
  },
  {
    "author": "Theodor Fontane",
    "text": "Gesundheit und ein heit'rer Sinnführen leicht durch's Leben hin. "
  },
  {
    "author": "Franz Grillparzer",
    "text": "Monde und Jahre vergehenund sind auf immer vergangen,aber ein schöner Momentleuchtet das Leben hindurch. "
  },
  {
    "author": "Marie von Ebner-Eschenbach",
    "text": "In der Jugend lernt, im Alter versteht man. "
  },
  {
    "author": "Charles Dickens",
    "text": "Kleinigkeiten machen die Summe des Lebens aus. "
  },
  {
    "author": "Franz Kafka",
    "text": "Jeder, der sich die Fähigkeit erhält, Schönes zu erkennen,wird nie alt werden. "
  },
  {
    "author": "Epikur",
    "text": "Lebe heute – vergiss die Sorgen der Vergangenheit. "
  },
  {
    "author": "Jean Paul",
    "text": "Unser ganzes Leben ist ein nie wiederkehrender Geburtstag, den wir darum heiliger und freudiger begehen sollen. "
  },
  {
    "author": "Mark Twain",
    "text": "Das Geheimnis des Glücks ist,statt der Geburtstage die Höhepunkte des Lebens zu zählen. "
  },
  {
    "author": "Friedrich Schleiermacher",
    "text": "Sinnen Sie immer auf ein Geschenk für mich? Sind das nicht die schönsten und die einzig wahren Geschenke, deren man nicht bedarf?"
  },
  {
    "author": "Alexis Carrel",
    "text": "Es kommt nicht darauf an, dem Leben mehr Jahre zu geben,sondern den Jahren mehr Leben zu geben. "
  },
  {
    "author": "Emily Dickinson",
    "text": "Wir werden nicht älter mit den Jahren,wir werden neuer jeden Tag. "
  },
  {
    "author": "Alter Trinkspruch",
    "text": "Prost mein Lieber, trink noch mal,du sollst leben so viel Jahr'wie der Fuchs am Schwanz hat Haar. "
  },
  {
    "author": "Marie von Ebner-Eschenbach",
    "text": "Feiere jeden Geburtstag als ob es der letzte wäre und bedenke, daß Liebe das einzige Geschenk ist, das wirklich die Mühe wert ist, zu geben. "
  },
  {
    "author": "Talmud",
    "text": "Gold und Lachen können das Alter zu Jugend machen. "
  },
  {
    "author": "Wilhelm Busch",
    "text": "Will das Glück nach seinem SinnDir was Gutes schenken,Sage Dank und nimm es hinOhne viel Bedenken. "
  },
  {
    "author": "Joseph von Eichendorff",
    "text": "Schweigt der Menschen laute Lust:Rauscht die Erde wie in TräumenWunderbar mit allen Bäumen,Was dem Herzen kaum bewußt,Alte Zeiten, linde Trauer,Und es schweifen leise SchauerWetterleuchtend durch die Brust. "
  },
  {
    "author": "Theodor Fontane",
    "text": "Leicht zu leben ohne Leichtsinn,heiter zu sein ohne Ausgelassenheit,Mut haben ohne Übermut;das ist die Kunst des Lebens. "
  },
  {
    "author": "Theodor Storm",
    "text": "Die blauen Tage brechen an,Und ehe sie verfließen,Wir wollen sie, mein wackrer Freund,Genießen, ja genießen!"
  },
  {
    "author": "Wilhelm Busch",
    "text": "Früher, da ich unerfahrenUnd bescheidner war als heute,Hatten meine höchste AchtungAndre Leute. Später traf ich auf der WeideAußer mir noch mehr Kälber,Und nun schätz ich, sozusagen,Erst mich selber. "
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "text": "Willst du immer weiter schweifen?Sieh, das Gute liegt so nah,Lerne nur das Glück ergreifen,Denn das Glück ist immer da. "
  },
  {
    "author": "Theodor Fontane",
    "text": "Das Glück, kein Reiter wird’s erjagen,es ist nicht dort, es ist nicht hier;lern überwinden, lern entsagen,und ungeahnt erblüht es dir. "
  },
  {
    "author": "Friedrich Rückert",
    "text": "Ich wünsche, dass dein Glücksich jeden Tag erneue,Dass eine gute Tatdich jede Stund' erfreue!"
  },
  {
    "author": "Friedrich Hölderlin",
    "text": "Und selig, wer im eignen Hause Frieden,Wie du, und Lieb und Fülle sieht und Ruh;Manch Leben ist, wie Licht und Nacht, verschieden,In goldner Mitte wohnest du. "
  },
  {
    "author": "Joachim Ringelnatz",
    "text": "Freude soll nimmer schweigen. Freude soll offen sich zeigen. Freude soll lachen, glänzen und singen. Freude soll weiterschwingen. "
  },
  {
    "author": "Christian Morgenstern",
    "text": "Alles fügt sich und erfüllt sichmusst es nur erwarten könnenund dem Werden deines GlückesJahr und Felder reichlich gönnen. "
  },
  {
    "author": "Franz Grillparzer",
    "text": "Der Mann bracht' es auf siebzig gar;das heißt: Von seinem siebenten Jahrhat all sein Wirken von Kind bis jetztnur eine Null ihm zugesetzt. "
  },
  {
    "author": "Julius Sturm",
    "text": "Genieße still zufriedenden sonnig heitren Tag. Du weißt nicht, ob hieniedenein gleicher kommen mag. "
  },
  {
    "author": "Ferdinand von Saar",
    "text": "Das aber ist des Alters Schöne,dass es die Saiten reiner stimmt,dass es der Lust die grellen Töne,dem Schmerz den herbsten Stachel nimmt. "
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "text": "Im neuen Jahre Glück und Heil,Auf Weh und Wunden gute Salbe!Auf groben Klotz ein grober Keil!Auf einen Schelmen anderthalbe!"
  },
  {
    "author": "Friedrich Rückert",
    "text": "Wann sein and'rer Spiegel dirWill die Jugend zeigen,In des Liedes Spiegel hierIst sie noch dein eigen. "
  },
  {
    "author": "Martin Luther",
    "text": "Wer im zwanzigsten Jahr nicht schön,im dreißigsten nicht stark,im vierzigsten nicht klug,im fünfzigsten nicht reich ist,der darf darauf nicht hoffen. "
  },
  {
    "author": "Ludwig Eichrodt",
    "text": "Ja loben muss ich Gott darum,Dass er so alt und doch nicht dummMich zeitlich werden lässt. Ein unzufried'ner Jubilar?Er wäre ja ganz undankbarFür ein so selt'nes Fest!"
  },
  {
    "author": "Unbekannt",
    "text": "Ob jung oder alt,wir schätzen dich in jeder Gestalt,und feiern deinen Geburtstag heut. "
  },
  {
    "author": "Marie Curie",
    "text": "Wir dürfen nicht hoffen, eine bessere Welt zu erbauen,ehe nicht die Individuen besser werden. "
  },
  {
    "author": "Ludwig Eichrodt",
    "text": "Nur geht es mir wie jedem Greis,Dass mir die Zähne reihenweisAusfallen kreuz und quer;Doch tröstet mich der Umstand auchDass ich jetzt nicht zu beißen brauch'In saure Äpfel mehr. "
  },
  {
    "author": "Unbekannt",
    "text": "Dieser Tag soll ein ganz Besonderer sein,drum lassen wir dich nicht allein,sondern feiern dein neues Lebensjahr!"
  },
  {
    "author": "Aloys Blumauer",
    "text": "Wir alle freuten uns des Tag's,Der dich zur Welt gebracht,Und dachten an den Umstand nicht,Der dir des Lebens süße PflichtSo schwer und bitter macht. "
  },
  {
    "author": "Unbekannt",
    "text": "Happy Birthday wünschen wir dir,bleib stets so toll wie du bist,die liebsten Grüße schreiben wir auf dieses Papier. "
  },
  {
    "author": "Friedrich Schleiermacher",
    "text": "An meinem Geburtstag ließ sich freilichdas Gewicht dieser Zeit nicht ganz abschütteln;aber ich bin damit ganz zufrieden;denn es trägt sich am leichtesten, wenn man es beständig fühlt. "
  },
  {
    "author": "Unbekannt",
    "text": "Heute ist ein besonderer Tag,an dem die Zeit nur für dich stillstehen mag. "
  },
  {
    "author": "Cäsar Flaischlen",
    "text": "Immer reicher, Jahr um Jahr,grüßt es mit Geschenkenimmer froher um dich herblüht es auf - und um so mehrlerne dich beschränken. "
  },
  {
    "author": "Theodor Storm",
    "text": "Du und dein Sohn,Sie sind beide schon alt;Doch blühen noch Rosen,Und das Herz ist nicht kalt. "
  },
  {
    "author": "Unbekannt",
    "text": "Zum Geburtstag viel Glück und Fröhlichkeit,genieße die schöne und heitere Zeit!"
  },
  {
    "author": "Eduard Mörike",
    "text": "So wunderbar empfand ich es, so neu,Dass noch bestehe Freundeslieb und Treu!Dass uns so sichrer Gegenwart GenussZusammenhaelt in Lebensueberfluss!"
  },
  {
    "author": "Unbekannt",
    "text": "Wenn wir älter werden, lernen wir, Prioritäten zu setzen. Die heutige Priorität ist: Torte essen und gemeinsam anstoßen!"
  },
  {
    "author": "Arthur Schopenhauer",
    "text": "Einer sei, jung, schön, reich und geehrt;so fragt sich, wenn man sein Glück beurteilen will, ob er dabei heiter sei:ist er hingegen heiter, so ist es einerlei, ob er jung oder alt,gerade oder bucklig, arm oder reich sei; er ist glücklich. "
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "text": "Wer die Körner wollte zählen,die dem Stundenglas entrinnen,würde Zeit und Ziel verfehlen,solchem Strome nachzusinnen. "
  },
  {
    "author": "Friedrich de la Motte Fouqué",
    "text": "Lieb Mütterchen, viel GlückZu diesem schönen Tage;Er komm' uns ohne PlageNoch oft und froh zurück. Sie dachten all sich ausEin Geschenk zu deinem Feste;Für mich ist wohl das BesteEin Verschen und ein Strauß. "
  },
  {
    "author": "Joachim Ringelnatz",
    "text": "Ach wie schön, dass Du geboren bist!Gratuliere uns, dass wir Dich haben,dass wir Deines Herzens gute Gabenoft genießen dürfen ohne List. "
  },
  {
    "author": "Gotthold Ephraim Lessing",
    "text": "Weg, weg mit Wünschen, Reimen, Schwänken!Trinkt fleißig, aber trinket still!Wer wird an die Gesundheit denken,wenn man die Gläser leeren will?"
  },
  {
    "author": "Joachim Ringelnatz",
    "text": "Ich wollte Dir was dezidieren,nein schenken; was nicht zuviel kostet. Aber was aus Blech ist, rostet,und die Messinggegenstände oxydieren. "
  },
  {
    "author": "Friedrich von Schiller",
    "text": "Ich bringe nichts als ein Gedichtzu Deines Tages Feier;denn alles, wie die Mutter spricht,ist so entsetzlich teuer. "
  },
  {
    "author": "Eduard Mörike",
    "text": "Man sagt, an solchen Tagen sei es Pflicht,sich selber einen Spiegel vorzuhalten:Ich bring ihn Dir, verschmäh' dies Blümchen nicht!Es soll Dir Deinen eignen Wert entfalten. "
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "text": "Willst du dir ein hübsch Leben zimmern,Musst dich ums Vergangne nicht bekümmern;Das Wenigste muss dich verdrießen;Musst stets die Gegenwart genießen. Besonders keinen Menschen hassenUnd die Zukunft Gott überlassen. "
  },
  {
    "author": "Theodor Fontane",
    "text": "Der Bäcker bringt Dir Kuchenbrot,der Schneider einen Mantel rot. Der Kaufmann schickt Dir, weiß und nett,ein Puppenkleid, ein Puppenbettund schickt auch eine Schachtel rundmit Schäfer und mit Schäferhund,mit Hürden, Bäumchen, paarweis je,und mit sechs Schafen, weiß wie Schnee,und eine Lerche, tirili,seit Sonnenaufgang hör ich sie. Die singt und schmettert, was sie mag,zu meines Lieblings Namenstag. "
  },
  {
    "author": "Matthias Claudius",
    "text": "Geburtstag, sei mir willkommen!Und fröhlich will ich an Dir sein,das hab' ich mir recht vorgenommen,und trinken Wein,und trinken Wein und singen Lieder -aber Geburtstag, komm doch noch wieder. "
  },
  {
    "author": "Theodor Storm",
    "text": "Es heißt wohl: Vierzig Jahr ein Mann!Doch mit Vierzig fängt die Fünfzig an. Es liegt die frische Morgenzeitim Dunkel unter mir so weit,Dass ich erschrecke, wenn ein Strahlin diese Tiefe fällt einmal. Schon weht ein Lüftchen von der Gruft,das bringt den Herbst-Resedaduft. "
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "text": "Angedenken an das GuteHält uns immer frisch bei Muthe. Angedenken an das SchöneIst das Heil der Erdensöhne. Angedenken an das Liebe,Glücklich! wenn's lebendig bliebe. Angedenken an das EineBleibt das Beste, was ich meine. "
  },
  {
    "author": "Julius Sturm",
    "text": "Genieße still zufriedenden sonnig heitren Tag. Du weißt nicht, ob hieniedenein gleicher kommen mag. Ferdinand von SaarDas aber ist des Alters Schöne,dass es die Saiten reiner stimmt,dass es der Lust die grellen Töne,dem Schmerz den herbsten Stachel nimmt. "
  },
  {
    "author": "Friedrich Rückert",
    "text": "Ein Festtag soll dich stärkenzu deines Werktags Werken,dass du an dein Geschäftemitbringst frische Kräfte. "
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "text": "Zwischen dem AltenZwischen dem NeuenHier uns zu freuenSchenkt uns das GlückUnd das VergangeneHeisst mit VertrauenVorwärts zu schauen,Schauen zurück. "
  },
  {
    "author": "François Rabelais",
    "text": "Man braucht im Leben nicht nur Geld allein,man braucht auch Liebe, Freude, Glück –von allem wünsche ich dir ein Stück. "
  },
  {
    "author": "Arthur Schopenhauer",
    "text": "Vom Standpunkte der Jugend aus gesehen, ist das Leben eine unendlich lange Zukunft; vom Standpunkte des Alters aus eine sehr kurze Vergangenheit. "
  },
  {
    "author": "Wilhelm Busch",
    "text": "Geld lasst von Herzen allen uns gönnen,soviel die Esel nur tragen können. "
  },
  {
    "author": "Jean Paul",
    "text": "Lache das Leben an! Vielleicht lacht es wider. "
  },
  {
    "author": "Samuel Butler",
    "text": "Alle Lebewesen außer dem Menschen wissen, daß der Hauptzweck des Lebens darin besteht, es zu genießen. "
  },
  {
    "author": "Oscar Wilde",
    "text": "Fünfunddreißig Jahre ist ein reizvolles Alter.  Es gibt Damen allerhöchster Geburt, die aus freier Wahl jahrelang fünfunddreißig bleiben, nachdem sie vierzig geworden sind. "
  },
  {
    "author": "Wassili Wassiljewitsch Rosanow",
    "text": "Lebe jeden Tag so, als ob du dein ganzes Leben langnur für diesen einzigen Tag gelebt hättest. "
  },
  {
    "author": "Selma Lagerlöf",
    "text": "Schenken heißt, einem anderen das geben,was man selber behalten möchte. "
  },
  {
    "author": "Sprichwort",
    "text": "Zufriedenheit ist eine große Kunst,zufrieden scheinen bloßer Dunst,zufrieden werden großes Glück,zufrieden bleiben Meisterstück. "
  },
  {
    "author": "Anatole France",
    "text": "Nichts ist so sehr für die gute alte Zeit verantwortlich wie das schlechte Gedächtnis. "
  },
  {
    "author": "Wilhelm Busch",
    "text": "Rotwein ist für alte Knabeneine von den besten Gaben. "
  },
  {
    "author": "Friedrich Ast",
    "text": "Das Leben ist Ewiges und Zeitliches zugleich; das Ewige ist sein Wesen, das Zeitliche seine Formoder Bildung. "
  },
  {
    "author": "Henry David Thoreau",
    "text": "Mögen Menschen kommen und gehen – mögen die Glocken läuten und Kinder schreien – wir wollen diesen Tag feiern!"
  },
  {
    "author": "Jean Paul",
    "text": "Die Erinnerung ist das einzige Paradies, aus dem wir nicht vertrieben werden können. "
  },
  {
    "author": "Antoine de Saint-Exupéry",
    "text": "Man muss lange leben, um ein Mensch zu werden. "
  },
  {
    "author": "Arthur Schopenhauer",
    "text": "Wie man, auf einem Schiffe befindlich, sein Vorwärtskommen nur am Zurückweichen und demnach Kleinerwerden der Gegenstände auf dem Ufer bemerkt, so wird man sein Alt- und Älterwerden daran inne, daß Leute von immer höhern Jahren einem jung vorkommen. "
  },
  {
    "author": "Arthur Schopenhauer",
    "text": "Wie man, auf einem Schiffe befindlich, sein Vorwärtskommen nur am Zurückweichen und demnach Kleinerwerden der Gegenstände auf dem Ufer bemerkt, so wird man sein Alt- und Älterwerden daran inne, daß Leute von immer höhern Jahren einem jung vorkommen. "
  }
]

exports.handler = (event, context, callback) => {
  const alexa = Alexa.handler(event, context)
  alexa.APP_ID = APP_ID
  // To enable string internationalization (i18n) features, set a resources object.
  alexa.resources = languageStrings
  alexa.registerHandlers(handlers)
  alexa.execute()
}

const handlers = {
  'LaunchRequest': function () {
    this.emit('GetWish')
  },
  'GetWish': function () {
    const index = Math.floor(Math.random() * wishes.length);
    const author = wishes[index].author
    const text = wishes[index].text
    const speechOutput = `${text} von ${author}`
    const cardOutput = `Autor: ${author}\n\n${text}`
    this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), cardOutput)
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':tell', this.t('HELP_MESSAGE'))
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'))
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'))
  }
}
