$(function() {
  $(".j-tooltip").tooltip();
  var gem_install_message_pre =
    "\
Fetching: addressable-2.3.5.gem (100%)\
\nFetching: launchy-2.3.0.gem (100%)\
\nFetching: require_all-1.3.2.gem (100%)\
\nFetching: thor-0.18.1.gem (100%)\
\nFetching: artii-2.0.3.gem (100%)\
\nFetching: rainbow-1.1.4.gem (100%)\
\nFetching: matrimonio-0.0.1.gem (100%)\
\n ";
  var gem_install_message_post =
    "\
\n[[b;#d33682;]==== Note di rilascio per matrimonio gem ====]\
\n\
\n'matrimonio' installato correttamente.\
\n    Digita [[b;#859900;]matrimonio] nel terminale per vedere\
\nla lista completa dei comandi disponibili.\
\n\
\nTi aspettiamo!\
\n\
\n[[b;#b58900;]Andrea e Desirée]\
\n\
\n[[b;#d33682;]=======================================]\
\n\
\nSuccessfully installed addressable-2.3.5\
\nSuccessfully installed launchy-2.3.0\
\nSuccessfully installed require_all-1.3.2\
\nSuccessfully installed thor-0.18.1\
\nSuccessfully installed artii-2.0.3\
\nSuccessfully installed rainbow-1.1.4\
\nSuccessfully installed matrimonio-0.0.1\
\n7 gems installed\
\n ";
  var prompt = "[[b;#d33682;]root]@[[b;#6c71c4;]matrimonio] ~$ ";
  var days_left = Math.round(
    (new Date("2019 09 16") - new Date()) / (1000 * 60 * 60 * 24)
  );
  var wedding_url = "https://goo.gl/maps/855qJ2ayAUEduGHa9";
  var ricevimento_url = "https://goo.gl/maps/kwstnbtvLia14zCN9";
  var venue_address =
    "\[[b;#b58900;]Sala del Regno dei Testimoni di Geova - Via Nazionale, 357, 90036 Portella di Mare, PA]\
    ";
  var ricevimento_address =
    "\[[b;#b58900;]Baglio Borgesati - SS188, 91018 Salemi, TP]\
    ";
  var ganesha =
    "\
\n][[b;#b58900;]                 ,    ,    .               ]\
\n[[b;#b58900;]             , ~@  `@ @~  `@  ,             ]\
\n[[b;#b58900;]           ~@ @ZXZ%%X&ZX%Z%XZ@`,            ]\
\n[[b;#b58900;]        ;@ %  @.~@,-.&&,-.@~ @ @H @~        ]\
\n[[b;#b58900;]        ,@X  ~  @(   )(   )@'  ~@X          ]\
\n[[b;#b58900;]        H  @     )   ()   (      ;@H@. ,    ]\
\n[[b;#b58900;]    `@X ,   `   '-=o=-'=o=-'         %@     ]\
\n[[b;#b58900;] `@ %  @                            ,@ X@~  ]\
\n[[b;#b58900;] ~ X@   '                            '  %  ,]\
\n[[b;#b58900;];@H                      ,-.             H@.]\
\n[[b;#b58900;]  %@~            .,.    (/)_)          `@X  ]\
\n[[b;#b58900;]  H `          ,*@@@*.  d ' b          ,@%@~]\
\n[[b;#b58900;]  %@~           &&&-b    ì /           ~@%  ]\
\n[[b;#b58900;]  X@.           && /: ,-/[x][[b;#b58900;]|-.        ' X@ ]\
\n[[b;#b58900;]~@H              &!! /  ì|M|/  |         H `]\
\n[[b;#b58900;] 'X@           /][[b;#b58900;](  )[ì /|M|ì~| |        X@:]\
\n[[b;#b58900;]  H           | ( ~~ ) !ì| |/ | |      `@%  ]\
\n[[b;#b58900;]  H@.         `='8  [`=' |-|  | |      ~ H  ]\
\n[[b;#b58900;],@X            ìì(@*)//  |-|  |/         H@~]\
\n[[b;#b58900;]  %@~         / (*@@*) ì_| |__|        `@X  ]\
\n[[b;#b58900;]  H `        /   (*@)   ì |  |         ,@%@~]\
\n[[b;#b58900;]  X@        /  ,~ ;: ~`  ì|  |           H  ]\
\n[[b;#b58900;]`@% '      /     :  ;     ì  |         ~@% ,]\
\n[[b;#b58900;]  H       /~       ;       ì |           X@.]\
\n[[b;#b58900;]  X@.    /.,   ~@~    ~@~   ì|           H  ]\
\n[[b;#b58900;]  H      /  ''*.,,*''*,.,*''ì|         `@H  ]\
\n[[b;#b58900;] @X@~   /                    ì          X@  ]\
\n[[b;#b58900;]~ %@,  /                      ì        ,@H ~]\
\n[[b;#b58900;]  H   /                        ì         H  ]\
\n[[b;#b58900;]  H@.@~                       ~@ì        %@,]\
\n[[b;#b58900;],@X `''*'*,  ~@~     ~@~  ,.*''*'      ~@X  ]\
\n[[b;#b58900;]  H@~      ''*,.*'''*.,*'               H@. ]\
\n[[b;#b58900;]  H><><><><><><><><><><><><><><><><><><><H   \
\n ";
  var invito_pre =
    "\
\n[[b;#d33682;]================ Invito di matrimonio ================]\
\n ";
  var jai_weds_andrea =
    "[[b;#b58900;]                                ,,                             ]\
    \n[[b;#b58900;]      db                      `7MM                            ]\
    \n[[b;#b58900;]     ;MM:                       MM                            ]\
    \n[[b;#b58900;]    ,V^MM.    `7MMpMMMb.   ,M''bMM  `7Mb,od8 .gP'Ya   ,6'Yb.  ]\
    \n[[b;#b58900;]   ,M  `MM      MM    MM ,AP    MM    MM' '',M'   Yb 8)   MM  ]\
    \n[[b;#b58900;]   AbmmmqMA     MM    MM 8MI    MM    MM    8M''''''  ,pm9MM  ]\
    \n[[b;#b58900;]  A'     VML    MM    MM `Mb    MM    MM    YM.    , 8M   MM  ]\
    \n[[b;#b58900;].AMA.   .AMMA..JMML  JMML.`Wbmd'MML..JMML.   `Mbmmd' `Moo9^Yo.]\
    \n[[b;#b58900;]                                                              ]\
    \n[[b;#b58900;]                        ,gM''bg                               ]\
    \n[[b;#b58900;]                        8MI  ,8                               ]\
    \n[[b;#b58900;]                        WMp,'                                 ]\
    \n[[b;#b58900;]                        ,gPMN.  jM''                          ]\
    \n[[b;#b58900;]                      ,M.  YMp.M'                             ]\
    \n[[b;#b58900;]                      8Mp   ,MMp                              ]\
    \n[[b;#b58900;]                      `YMbmm'``MMm.                           ]\
    \n[[b;#b58900;]                                                              ]\
    \n[[b;#b58900;]                                ,,                            ]\
    \n[[b;#b58900;]`7MM'''Yb.                      db                            ]\
    \n[[b;#b58900;]  MM    `Yb.                                                  ]\
    \n[[b;#b58900;]  MM     `Mb  .gP'Ya  ,pP'Ybd `7MM  `7Mb,od8 .gP'Ya   .gP'Ya  ]\
    \n[[b;#b58900;]  MM      MM ,M'   Yb 8I   `'   MM    MM' '',M'   Yb ,M'   Yb ]\
    \n[[b;#b58900;]  MM     ,MP 8M'''''' `YMMMa.   MM    MM    8M'''''' 8M'''''' ]\
    \n[[b;#b58900;]  MM    ,dP' YM.    , L.   I8   MM    MM    YM.    , YM.    , ]\
    \n[[b;#b58900;].JMMmmmdP'    `Mbmmd' M9mmmP' .JMML..JMML.   `Mbmmd'  `Mbmmd' ]\
    \n ";
  var invito_post =
    "\
\n -------------------------------------------------------- \
\n| [[b;#800000;]------------------------------------------------------] |\
\n|[[b;#800000;]|] ---------------------------------------------------- [[b;#800000;]|]|\
\n|[[b;#800000;]|]|                                                    |[[b;#800000;]|]|\
\n|[[b;#800000;]|]| Andrea Lomonaco                   Desiree La Porta |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|                                                    |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|   annunciano con grande gioia il loro matrimonio   |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|                   che si terrà                     |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|        il 16 Settembre 2019 alle ore 15,30         |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|   presso la [[b;#b58900;]Sala del Regno dei Testimoni di Geova]  |[[b;#800000;]|]|\
\n|[[b;#800000;]|]| [[b;#268bd2;]Via Nazionale 274, Villabate/Portella di Mare (PA)] |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|                                                    |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|          Dopo la cerimonia saranno lieti di        |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|           festeggiare con parenti ed amici         |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|          al [[b;#b58900;]Baglio Borgesati 'Villa Leonardo']      |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|                 [[b;#268bd2;]S.S. 188, Salemi (TP)]              |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|                                                    |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|    È gradita la conferma entro l'1 Settembre 2019  |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|                                                    |[[b;#800000;]|]|\
\n|[[b;#800000;]|]| Via Piemonte 5/A           Via Tenente Morici 13/A |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|   Castelvetrano                    Villabate       |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|    388-4440169                    320-3848626      |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|                                                    |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|                                                    |[[b;#800000;]|]|\
\n|[[b;#800000;]|]| Preparati! Mancano soltanto [[b;#cb4b16;]" +
    days_left +
    "] giorni.             |[[b;#800000;]|]|\
\n|[[b;#800000;]|]|                                                    |[[b;#800000;]|]|\
\n|[[b;#800000;]|] ---------------------------------------------------- [[b;#800000;]|]|\
\n| [[b;#800000;]------------------------------------------------------] |\
\n -------------------------------------------------------- \
\n ";
  var wedding_help =
    "\
Comandi disponibili: \
\n\t[[b;#268bd2;]matrimonio invito]          [[b;#2aa198;]# Invito di matrimonio] \
\n\t[[b;#268bd2;]matrimonio celebrazione]    [[b;#2aa198;]# Link di Google maps per la Sala del Regno] \
\n\t[[b;#268bd2;]matrimonio ricevimento]     [[b;#2aa198;]# Link di Google maps per la Sala Ricevimenti] \
\n\t[[b;#268bd2;]matrimonio info]            [[b;#2aa198;]# Per ricevere maggiori info e chiarimenti]\
\n ";
  var rsvp =
    "\
\nPer maggiori info e chiarimenti puoi contattarci direttamente\
\nal nostro numero di cellulare\
\n[[b;#d33682;]Andrea]: [[b;#b58900;]388-4440169]\
\n[[b;#d33682;]Desiree]: [[b;#b58900;]320-3848626]\
\n ";
  var you_are_late =
    "\
Scusa, sei in ritardo per partecipare all'evento. \
\nAndrea e Desiree si sono già sposati il 16 Settembre 2019 \
\nMa questo sito rimarrà qui per scopi di archiviazione. \
\nNaviga liberamente :-) \
\n  ";
  if (days_left >= 0) {
    you_are_late = "";
  }
  var greetings =
    you_are_late +
    jai_weds_andrea +
    "\
\n\nBenvenuto nel sito dedicato al matrimonio di Andrea e Desiree. Per iniziare, \
\ninstalla 'matrimonio' da terminale usando il comando [[b;#859900;]gem install matrimonio].\
\nUna volta installato, digita [[b;#859900;]matrimonio] nel terminale per vedere i comandi disponibili.\
\n \
\nPremi [[b;#859900;]invio (↩)] per installarlo da terminale.\
\n  ";
  var gem_list_empty = "\n*** LOCAL GEMS ***\n";
  var gem_list_full =
    "\n*** LOCAL GEMS ***\n\naddressable (2.3.5)\nlaunchy (2.3.0)\nrequire_all (1.3.2)\nthor (0.18.1)\nartii (2.0.3)\nrainbow (1.1.4)\nwedding (0.0.1)\n";
  var print_gem =
    "RubyGems is a sophisticated package manager for Ruby.  This is a\nbasic help message containing pointers to more information.\n\n  Usage:\n    gem -v\n    gem command [arguments...] [options...]\n\n  Examples:\n    gem install rake\n    gem list --local\n    gem build package.gemspec\n    gem help install\n\n  Further help:\n    gem help commands            list all 'gem' commands\n    gem help examples            show some examples of usage\n    gem help platforms           show information about platforms\n    gem help <COMMAND>           show help on COMMAND\n                                   (e.g. 'gem help install')\n    gem server                   present a web page at\n                                 http://localhost:8808/\n                                 with info about installed gems\n  Further information:\n    http://rubygems.rubyforge.org";
  function print_slowly(term, paragraph, callback) {
    var foo, i, lines;
    lines = paragraph.split("\n");
    term.pause();
    i = 0;
    foo = function(lines) {
      return setTimeout(function() {
        if (i < lines.length - 1) {
          term.echo(lines[i]);
          i++;
          return foo(lines);
        } else {
          term.resume();
          return callback();
        }
      }, 1000);
    };
    return foo(lines);
  }
  function require_command(command_regex, terminal_history) {
    var executed = false;
    $.each(terminal_history, function(index, value) {
      if (command_regex.test(value)) {
        executed = true;
      }
    });
    return executed;
  }
  var gem_install_regex = /gem +install +matrimonio */gi;
  function gem(inputs, term) {
    if (!inputs[1]) {
      term.echo(print_gem);
    } else if (inputs[1] === "install" && inputs[2] === "matrimonio") {
      print_slowly(term, gem_install_message_pre, function() {
        term.echo(gem_install_message_post);
      });
    } else if (inputs[1] === "-v") {
      term.echo("1.3.6");
    } else if (inputs[1] == "list") {
      term.echo(gem_list_full);
    } else {
      term.echo(inputs.join(" ") + " non è un comando valido");
    }
  }
  function matrimonio(inputs, term) {
    if (!inputs[1]) {
      term.echo(wedding_help);
    } else if (inputs[1] === "invito") {
      term.echo("[[;#b58900;]" + ganesha + "]");
      term.echo(invito_pre);
      term.pause();
      setTimeout(function() {
        term.resume();
        term.echo(invito_post);
      }, 1500);
    } else if (inputs[1] === "celebrazione") {
      term.echo(venue_address);
      term.echo(wedding_url);
      term.push(
        function(command, term) {
          if (/s(i){0,1}/.test(command)) {
            window.open(wedding_url, "_blank");
          }
          term.pop();
        },
        {
          prompt: "Vuoi aprire il link nel browser? ([[b;#859900;]si]/[[b;#859900;]no]) ",
          greetings: null
        }
      );
    } else if (inputs[1] === "ricevimento") {
      term.echo(ricevimento_address);
      term.echo(ricevimento_url);
      term.push(
        function(command, term) {
          if (/s(i){0,1}/.test(command)) {
            window.open(ricevimento_url, "_blank");
          }
          term.pop();
        },
        {
          prompt: "Vuoi aprire il link nel browser? ([[b;#859900;]si]/[[b;#859900;]no]) ",
          greetings: null
        }
      );
    } else if (inputs[1] === "info") {
      term.echo(rsvp);
    } else {
      term.error(inputs.join(" ") + " non è un comando valido");
    }
  }
  function interpreter(input, term) {
    var command, inputs;
    inputs = input.split(/ +/);
    command = inputs[0];
    if (command === "gem") {
      gem(inputs, term);
    } else if (command === "matrimonio" || command === "help") {
      window.terminal = term;
      if (require_command(gem_install_regex, term.history().data())) {
        matrimonio(inputs, term);
      } else {
        term.error(
          "Per favore installa 'matrimonio' prima eseguendo:\ngem install matrimonio"
        );
      }
    } else if (/(cd)|(ls)|(cat)/.test(command)) {
      bash(inputs, term);
    } else if (input === "ruby -v") {
      term.echo("1.9.3");
    } else if (/which +matrimonio/.test(input)) {
      if (require_command(gem_install_regex, term.history().data())) {
        term.echo("/usr/bin/matrimonio");
      }
    } else if (/whoami/.test(input)) {
      term.echo("root");
    } else if (command.length === 0) {
    } else {
      term.error(command + " non è un comando valido");
    }
  }
  function bash(inputs, term) {
    var argument, echo, insert;
    echo = term.echo;
    insert = term.insert;
    if (!inputs[1]) {} else {
      argument = inputs[1];
      if (/^\.\./.test(argument)) {
        return echo("-bash: cd: " + argument + ": Permesso negato");
      } else {
        return echo("-bash: cd: " + argument + ": Nessun file o cartella");
      }
    }
  }
  $("#terminal").terminal(interpreter, {
    prompt: prompt,
    name: "matrimonio",
    greetings: greetings,
    height: 770,
    onInit: function(term) {
      term.insert("gem install matrimonio");
      term.history().clear();
    },
    completion: function(term, string, callback) {
      callback([
        "gem install matrimonio",
        "matrimonio invito",
        "matrimonio celebrazione",
        "matrimonio ricevimento",
        "matrimonio info",
      ]);
    },
    tabcompletion: true
  });
});
