;(function(){
  var younApp = angular.module('YounApp');
  var Controllers = {
    YounHomeController: function($scope) {
      $scope.viewId = "home";

      $scope.info = {
        header : "Nhan Bui",
        description: "A developer with great passion in design",
        buttonHref: "about",
        buttonTitle: "More about me"
      };
    },

    YounAboutController: function($scope) {
      $scope.viewId = 'about';

      $scope.bio = {
        intro: '"Hello World" from Bui Trong Nhan - a developer who loves to learn and play with technologies. '
              + 'Apart from coding, I also have strong interest in enhancing UX/UI. '
              + 'I am in the progress of honing my skills in order to be a full-stack developer.'
      };

      $scope.edu = {
        uni: 'National University of Singapore',
        startYear: '2012',
        endYear: '2016',
        course: 'Bachelor of Computing, Communications and Media',
        stream: 'Specialisation in Games',
        cap: '4.64',
        achievements: [
          {
            prefix: 'Tutor',
            suffix: 'CS3217 Software Engineering on Modern Application Platforms'
          },
          {
            prefix: '1st Place',
            suffix: 'Open Source Software World Challenge 2014 with TEAMMATES project'
          },
          {
            prefix: 'Mentor',
            suffix: 'CS2103R Software Engineering Research'
          },
          {
            prefix: 'Dean List',
            suffix: 'School of Computing 2013 - 2014'
          },
          {
            prefix: 'ASEAN Scholar',
            suffix: 'National University of Singapore'
          }
        ]
      };

      $scope.work = {
        workItems: [
          {
            name: 'Teammates',
            ref: 'https://teammatesv4.appspot.com/',
            position: 'Software Engineer Internship',
            startTime: 'May 2014',
            endTime: 'Aug 2014',
            description: 'TEAMMATES is a course feedback application system which is widely used by many universities. '
              + 'I was mainly in charged of enhancing the scalability of the system and modifying the testing infrastructure of the system in order to achieve better performance. ' 
              + 'I also held responsibility for tweaking part of the interfaces of the system to improve user experience.',
            techStack: ['Google App Engine', 'Selenium Webdriver', 'JDO', 'Java Server', 'jQuery', 'Bootstrap']
          },
          {
            name: 'Pearcomms',
            ref: 'https://pearcomms.com/',
            position: 'Software Engineer Internship',
            startTime: 'May 2015',
            endTime: 'Aug 2015',
            description: 'QuickDesk is a simplified CRM application optimized for sales teams and professionals created by PearComms. '
              + ' I was mainly in charged of leading the iOS development for this application from scratch. '
              + ' I also partly help develop the internal Web UI Component framework with main responsibilty for styling the components. ',
            techStack: ['iOS', 'TestFlight', 'CocoaPods', 'Masonry', 'Mantle', 'AFNetworking', 'React', 'SASS', 'Plivo SDK', 'BrainTree SDK']
          }
        ]
      }

      $scope.skills = {
        workSkills: [
          {
            title: 'Teamwork',
            thumbnailURL: 'Teamwork.png',
            description: 'Participating in various group projects has helped me learn inter-personal skills and workflow in team development. '
              + 'These allow me to work excellenty as part of a team'
          },
          {
            title: 'Problem Solving',
            thumbnailURL: 'ProblemSolving.png',
            description: 'I am trained to have strong analytical and problem solving skills experienced from academic studies'
          },
          {
            title: 'Quick Adaptation',
            thumbnailURL: 'QuickAdaptation.png',
            description: 'As a developer, I always try to update my skills with the newest technologies in the community. '
              + 'I am also quickly adaptable with new things and use them efficiently'
          }
        ],

        techSkills: [
          {
            title: 'HTML5',
            thumbnailURL: 'HTML5.png',
            rate: 70
          },
          {
            title: 'CSS3',
            thumbnailURL: 'CSS3.png',
            rate: 72
          },
          {
            title: 'JavaScript',
            thumbnailURL: 'Javascript.png',
            rate: 76
          },
          {
            title: 'Python',
            thumbnailURL: 'Python.png',
            rate: 40
          },
          {
            title: 'Objective-C',
            thumbnailURL: 'Objective-C.png',
            rate: 78
          },
          {
            title: 'Swift',
            thumbnailURL: 'Swift.png',
            rate: 50
          },
          {
            title: 'Android',
            thumbnailURL: 'Android.png',
            rate: 65
          },
          {
            title: 'Java',
            thumbnailURL: 'Java.png',
            rate: 70
          }
        ]
      };

      $scope.nextButton = {
        buttonHref: "projects",
        buttonTitle: "View My Projects"
      }
    },

    YounProjectsController: function($scope) {
      $scope.viewId = "projects";
      $scope.refIcons = {
        'GitHub': 'icon-before-github',
        'YouTube': 'icon-before-youtube',
        'FaceBook': 'icon-before-facebook'
      }
      $scope.projects = [
        {
          title: 'Quickdesk iOS',
          description: 'QuickDesk is a simplified CRM application optimized for sales teams and professionals. '
            + 'It allows user to easily organize their leads and communicate with them on the go through sms, email and call. '
            + 'User can also keep track of their appoinments and to-do tasks conveniently through the system.',
          tags: [
            'iOS', 
            'TestFlight', 
            'CocoaPods', 
            'Masonry', 
            'Mantle', 
            'AFNetworking', 
            'Plivo SDK', 
            'Braintree SDK'
          ],
          images: [
            'QuickDesk/quickdesk-1.png',
            'QuickDesk/quickdesk-2.png',
            'QuickDesk/quickdesk-3.png',
            'QuickDesk/quickdesk-4.png',
            'QuickDesk/quickdesk-5.png',
            'QuickDesk/quickdesk-6.png',
            'QuickDesk/quickdesk-7.png',
            'QuickDesk/quickdesk-8.png',
            'QuickDesk/quickdesk-9.png',
            'QuickDesk/quickdesk-10.png'
          ] 
        },
        {
          title: 'Midify',
          description: 'Midify will allow user to record any audio source and convert it into a MIDI file output by analyzing different properties of the audio input such as pitch, duration of notes, etc. '
            + 'User can then use these MIDI files to playback on their mobile device or transfer them to other MIDI controllers. '
            + 'What makes our application unique is its portability where user can create MIDI tracks on the fly everywhere, which is not ideal for other MIDI controllers. '
            + 'Midify also serves as a MIDI gallery platform for music producers to store their music and share with each other.',
          links: [
            {
              title: 'GitHub',
              ref: 'https://github.com/imouto1994/Midify-Android'
            },
            {
              title: 'GitHub',
              ref: 'https://github.com/imouto1994/Midify-Web'
            }
          ],
          tags: [
            'Android',
            'Retrofit',
            'NodeJS',
            'Angular',
            'REST API',
            'Facebook SDK',
            'Waon',
            'MIDI Converter',
            'Material Design'
          ],
          images: [
            'Midify/midify-1.png',
            'Midify/midify-2.png',
            'Midify/midify-3.png',
            'Midify/midify-4.png',
            'Midify/midify-5.png',
            'Midify/midify-6.png',
            'Midify/midify-7.png'
          ] 
        },
        {
          title: 'Jack the Jetrider',
          description: 'Jack the Jetrider is a unique 3D endless running game inspired from both Temple Run & Jetpack Joyride. '
            + 'The player has to control the character by hovering instead of jumping to avoid different obstacles throughout the game. '
            + 'The player also has to keep aware of their fuel bar and collect fuel on the road so that they can use the jetpack. '
            + 'The game also allows player to use Leap Motion Controller so that player can feel more immersed into the game. ',
          links: [
            {
              title: 'GitHub',
              ref: 'https://github.com/imouto1994/CS3247-Jetrider'
            },
            {
              title: 'YouTube',
              ref: 'https://www.youtube.com/watch?v=GjQBUC825Xg'
            }
          ],
          tags: [
            'Unity',
            'Maya',
            'C#',
            'Leap Motion Controller',
            'Endless Running',
            'Infinite Level Generator'
          ],
          images: [
            'Jack/jack-1.png',
            'Jack/jack-2.png',
            'Jack/jack-3.png',
            'Jack/jack-4.png',
            'Jack/jack-5.png',
            'Jack/jack-6.png'
          ]
        },
        {
          title: 'YouFind',
          description: 'YouFind is the ideal solution to the problem of multimedia search for videos. '
            + 'As a web application, YouFind comes with a sleek and user-friendly interface and allows users to visually search for related YouTube videos with their custom input image, which can be in the form of URL or uploading from their local devices. '
            + 'The users can then watch, like or subscribe the video results directly on the site with their Google+ account. '
            + 'The system also allows user to make relevance feedback for the video results to instantly and effectively update the results.',
          links: [
            {
              title: 'GitHub',
              ref: 'https://github.com/imouto1994/YouFind'
            }
          ],
          tags: [
            'jQuery',
            'Youtube API',
            'Google+ API',
            'NodeJS',
            'Web Scraping',
            'Multimedia Search',
            'Chrome Extension',
            'HTML5 Player'
          ],
          images: [
            'YouFind/youFind-1.png',
            'YouFind/youFind-2.png',
            'YouFind/youFind-3.png',
            'YouFind/youFind-4.png',
            'YouFind/youFind-5.png',
            'YouFind/youFind-6.png'
          ]
        },
        {
          title: 'Aerhythm',
          description: 'Aerhythm is a unique and entirely fresh idea in iOS games. '
            + 'It is a music-based jet-fighting game where the gameplay will vary according to the user’s custom input song from the local device. '
            + 'The game system will detect the tempo, pitch at every short interval of the song and change the speed and types of bullets, enemies and player respectively. '
            + "Therefore, depending on the user's song choice, the experience for each level can be diverse and exciting. "
            + "The game also comes with various kinds of jet models, levels, power-ups, special skills and players can use their gained score after each level to upgrade their abilities. "
            + "Aerhythm also enhances connection between players through its system ranking and social network supports. "
            + "Player can see their rank for each level on global ranking chart or friend ranking. "
            + "From these ranking charts, players are able to find the songs that other players use to get high rank on iTunes or even request to retrieve these songs from their friends through Facebook. ",
          links: [
            {
              title: 'GitHub',
              ref: 'https://github.com/imouto1994/Aerhythm'
            },
            {
              title: 'YouTube',
              ref: 'https://www.youtube.com/watch?v=JWpE8u01Di8'
            }
          ],
          tags: [
            'iOS',
            'Objective-C',
            'SpriteKit',
            'Facebook SDK',
            'Parse SDK',
            'Aubio Framework',
            'Music Analysis'
          ],
          images: [
            'Aerhythm/aerhythm-1.png',
            'Aerhythm/aerhythm-2.png',
            'Aerhythm/aerhythm-3.png',
            'Aerhythm/aerhythm-4.png',
            'Aerhythm/aerhythm-5.png',
            'Aerhythm/aerhythm-6.png',
            'Aerhythm/aerhythm-7.png',
            'Aerhythm/aerhythm-8.png',
            'Aerhythm/aerhythm-9.png',
            'Aerhythm/aerhythm-10.png',
            'Aerhythm/aerhythm-11.png',
            'Aerhythm/aerhythm-12.png',
            'Aerhythm/aerhythm-13.png',
            'Aerhythm/aerhythm-14.png',
            'Aerhythm/aerhythm-15.png',
            'Aerhythm/aerhythm-16.png',
            'Aerhythm/aerhythm-17.png',
            'Aerhythm/aerhythm-18.png'
          ]
        },
        {
          title: 'iDo',
          description: 'iDo is a great task manager to easily and conveniently manage to-do tasks for users on desktop. '
            + 'iDo majorly aims for keyboard-holic users with its command-driven system. '
            + 'It also comes with a sleek and user-friendly interface to help users easily triggering commands such as having different colours for different fields within a command. '
            + 'However, what makes iDo shine is its support of two-way synchronisation with Google Calendar, which makes it not simply a desktop application. '
            + 'With the aid of this feature, users can swiftly manage their tasks everywhere without worries.',
          links: [
            {
              title: 'GitHub',
              ref: 'https://github.com/imouto1994/iDo'
            },
            {
              title: 'YouTube',
              ref: 'https://www.youtube.com/watch?v=T6_rrN7TTug'
            }
          ],
          tags: [
            'Java',
            'JavaFX',
            'CSS',
            'XML',
            'Google Calendar API',
            'Google Sync'
          ],
          images: [
            'iDo/iDo-1.png',
            'iDo/iDo-2.png',
            'iDo/iDo-3.png',
            'iDo/iDo-4.png',
            'iDo/iDo-5.png',
            'iDo/iDo-6.png',
            'iDo/iDo-7.png',
            'iDo/iDo-8.png',
            'iDo/iDo-9.png',
            'iDo/iDo-10.png'
          ]
        }
      ]
    },

    YounContactsController: function($scope) {
      $scope.viewId = "contacts";
      $scope.mapRef = "https://www.google.com/maps/place/Prince+George's+Park,+National+University+of+Singapore,+Singapore/@1.29232,103.779836,17z/data=!3m1!4b1!4m2!3m1!1s0x31da1a54449e8c95:0x9df98d43c9da1c31";
      $scope.socialLinks = [
        {
          name: 'facebook',
          ref: 'https://www.facebook.com/buigia1994'
        },
        {
          name: 'google',
          ref: 'https://plus.google.com/117066098866440656421/posts'
        },
        {
          name: 'twitter',
          ref: 'https://twitter.com/YounFelix'
        },
        {
          name: 'github',
          ref: 'https://github.com/imouto1994'
        }
      ];
      $scope.contacts = [
        {
          name: 'phone',
          content: '+65 83496137'
        },
        {
          name: 'email',
          content: 'imouto1994@gmail.com'
        },
        {
          name: 'address',
          content: "26 Prince George's Park S"
        }
      ];
    }
  }
  
  younApp.controller('YounHomeController', ['$scope', Controllers.YounHomeController]);
  younApp.controller('YounAboutController', ['$scope', Controllers.YounAboutController]);
  younApp.controller('YounProjectsController', ['$scope', Controllers.YounProjectsController]);
  younApp.controller('YounContactsController', ['$scope', Controllers.YounContactsController]);
})();