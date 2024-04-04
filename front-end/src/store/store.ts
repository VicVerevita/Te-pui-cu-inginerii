import { writable } from 'svelte/store'
import type { Domain, Question } from "../../../common/types"

export const domains = writable<Domain[]>(
    [
        {
            "id": 1,
            "name": "FIZICĂ",
            "completed": false,
            "domainQuestion": {
                "text": "Ce tip de baterie este cel mai comun în aplicațiile portabile, cum ar fi telefoanele mobile?",
                "possibleAnswers": [
                    {
                        "text": "A. Baterii Ni-Cd (nicke-cadmium)",
                        "correct": false
                    },
                    {
                        "text": "B. Baterii Li-ion (litiu-ion)",
                        "correct": true
                    },
                    {
                        "text": "C. Baterii alcaline",
                        "correct": false
                    },
                    {
                        "text": "D. Baterii plumb-acid",
                        "correct": false
                    }
                ]
            }
        },
        {
            "id": 2,
            "name": "CHIMIE",
            "completed": false,
            "domainQuestion": {
                "text": "Care este elementul chimic cu numărul atomic 79?",
                "possibleAnswers": [
                    {
                        "text": "A. Aurul",
                        "correct": true
                    },
                    {
                        "text": "B. Argintul",
                        "correct": false
                    },
                    {
                        "text": "C. Cuprul",
                        "correct": false
                    },
                    {
                        "text": "D. Plumbul",
                        "correct": false
                    }
                ]
            }
        },
        {
            "id": 3,
            "name": "LITERATURĂ",
            "completed": false,
            "domainQuestion": {
                "text": "Care este faimosul personaj despre care a scris Charles Dickens?",
                "possibleAnswers": [
                    {
                        "text": "A. Amelie Bourienne",
                        "correct": false
                    },
                    {
                        "text": "B. Ebenezer Scrooge",
                        "correct": true
                    },
                    {
                        "text": "C. Tom Sawyer",
                        "correct": false
                    },
                    {
                        "text": "D. Natasha Rostova",
                        "correct": false
                    }
                ]
            }
        },
        {
            "id": 4,
            "name": "MUZICA",
            "completed": false,
            "domainQuestion": {
                "text": "Care dintre următoarele trupe este cunoscută pentru a fi pionieră în dezvoltarea subgenului groove metal?",
                "possibleAnswers": [
                    {
                        "text": "A. Pantera",
                        "correct": true
                    },
                    {
                        "text": "B. Lamb of God",
                        "correct": false
                    },
                    {
                        "text": "C. Machine Head",
                        "correct": false
                    },
                    {
                        "text": "D. Sepultura",
                        "correct": false
                    }
                ]
            }
        },
        {
            "id": 5,
            "name": "JOCURI VIDEO",
            "completed": false,
            "domainQuestion": {
                "text": "Ce tip de joc este \"League of Legends\"?",
                "possibleAnswers": [
                    {
                        "text": "A. Un shooter în primă persoană (FPS)",
                        "correct": false
                    },
                    {
                        "text": "B. Un joc de tip multiplayer online battle arena (MOBA).",
                        "correct": true
                    },
                    {
                        "text": "C. Un joc de rol în masă online (MMORPG)",
                        "correct": false
                    },
                    {
                        "text": "D. Un joc de luptă",
                        "correct": false
                    }
                ]
            }
        },
        {
            "id": 6,
            "name": "INFORMATICĂ",
            "completed": false,
            "domainQuestion": {
                "text": "Ce este un \"framework\" în programare?",
                "possibleAnswers": [
                    {
                        "text": "A. Un tip de limbaj de programare",
                        "correct": false
                    },
                    {
                        "text": "B. O colecție de funcții predefinite și convenții de codificare",
                        "correct": true
                    },
                    {
                        "text": "C. Un tip de bază de date",
                        "correct": false
                    },
                    {
                        "text": "D. Un editor de cod",
                        "correct": false
                    }
                ]
            }
        },
        {
            "id": 7,
            "name": "MATEMATICĂ",
            "completed": false,
            "domainQuestion": {
                "text": "Rad(15) este un numar.. :",
                "possibleAnswers": [
                    {
                        "text": "A. Real",
                        "correct": false
                    },
                    {
                        "text": "B. Imaginar",
                        "correct": false
                    },
                    {
                        "text": "C. Irațional",
                        "correct": true
                    },
                    {
                        "text": "D. Natural",
                        "correct": false
                    }
                ]
            }
        },
        {
            "id": 8,
            "name": "BIOLOGIE",
            "completed": false,
            "domainQuestion": {
                "text": "Ce este sistemul limfatic?",
                "possibleAnswers": [
                    {
                        "text": "A. Un sistem responsabil pentru transportul nutrienților în organism",
                        "correct": false
                    },
                    {
                        "text": "B. Un sistem de apărare al organismului împotriva patogenilor",
                        "correct": true
                    },
                    {
                        "text": "C. Un sistem responsabil pentru schimbul de gaze în organism",
                        "correct": false
                    },
                    {
                        "text": "D. Un sistem care reglează echilibrul hidric în organism",
                        "correct": false
                    }
                ]
            }
        },
        {
            "id": 9,
            "name": "ISTORIE",
            "completed": false,
            "domainQuestion": {
                "text": "Cine a fost primul om care a ajuns în spațiul cosmic?",
                "possibleAnswers": [
                    {
                        "text": "A. Yuri Gagarin",
                        "correct": true
                    },
                    {
                        "text": "B. Neil Armstrong",
                        "correct": false
                    },
                    {
                        "text": "C. Buzz Aldrin",
                        "correct": false
                    },
                    {
                        "text": "D. John Glenn",
                        "correct": false
                    }
                ]
            }
        },
        {
            "id": 10,
            "name": "GEOGRAFIE",
            "completed": false,
            "domainQuestion": {
                "text": "Care dintre următoarele state este vecin cu Slovacia?",
                "possibleAnswers": [
                    {
                        "text": "A. Croația",
                        "correct": false
                    },
                    {
                        "text": "B. Austria",
                        "correct": true
                    },
                    {
                        "text": "C. Serbia",
                        "correct": false
                    },
                    {
                        "text": "D. Germania",
                        "correct": false
                    }
                ]
            }
        }
    ]    
);

export const questions =  writable<Question[]>(
    [
        {
            "id" : 1,
            "text": "Care este diferența principală dintre alfabetul georgian și cel armean?",
            "completed": false,
            "possibleAnswers": [
                {
                    "text": "A. Alfabetul georgian are mai multe caractere decât alfabetul armean.",
                    "correct": true
                },
                {
                    "text": "B. Alfabetul armean este considerat un alfabet abjad, în timp ce alfabetul georgian este unul consonantic.",
                    "correct": false
                },
                {
                    "text": "C. Alfabetul armean este derivat din cel grec, în timp ce alfabetul georgian este complet diferit din punct de vedere istoric și lingvistic.",
                    "correct": false
                },
                {
                    "text": "D. Alfabetul georgian este un sistem unic de scriere, în timp ce alfabetul armean împrumută elemente din mai multe alte scrieri.",
                    "correct": false
                }
            ]
        },
        {
            "id": 2,
            "text": "Ce este \"IoT\" în domeniul ingineriei?",
            "completed": false,
            "possibleAnswers": [
                {
                    "text": "A. Internet of Things (Internetul Lucrurilor)",
                    "correct": true
                },
                {
                    "text": "B. Integrated Operations Technology (Tehnologia Operațiunilor Integrată)",
                    "correct": false
                },
                {
                    "text": "C. Industrial Optimization Technique (Tehnica de Optimizare Industrială)",
                    "correct": false
                },
                {
                    "text": "D. Integrated Operations Team (Echipa de Operațiuni Integrată)",
                    "correct": false
                }
            ]
        },
        {
            "id": 3,
            "text": "Care este principala metodă utilizată pentru antrenarea modelelor de învățare automată fără supervizare?",
            "completed": false,
            "possibleAnswers": [
                {
                    "text": "A. Învățare supervizată",
                    "correct": false
                },
                {
                    "text": "B. Învățare nesupervizată",
                    "correct": true
                },
                {
                    "text": "C. Învățare semi supervizată",
                    "correct": false
                },
                {
                    "text": "D. Învățare prin recompensă",
                    "correct": false
                }
            ]
        },
        {
            "id": 4,
            "text": "Care este efectul unei reduceri a ratei dobânzii asupra investițiilor?",
            "completed": false,
            "possibleAnswers": [
                {
                    "text": "A. Stimularea investițiilor prin scăderea costurilor de împrumut",
                    "correct": true
                },
                {
                    "text": "B. Reducerea numărului de investitori pe piață",
                    "correct": false
                },
                {
                    "text": "C. Creșterea cheltuielilor de consum",
                    "correct": false
                },
                {
                    "text": "D. Scăderea valorii valutei naționale",
                    "correct": false
                }
            ]
        },
        {
            "id": 5,
            "text": "Cine a scris manifestul comunist impreuna cu Karl Marx?",
            "completed": false,
            "possibleAnswers": [
                {
                    "text": "A. Friederich Freud",
                    "correct": false
                },
                {
                    "text": "B. Friederich Marx",
                    "correct": false
                },
                {
                    "text": "C. Friederich Locke",
                    "correct": false
                },
                {
                    "text": "D. Friedrich Engels",
                    "correct": true
                }
            ]
        },
        {
            "id": 6,
            "text": "Care este capitala Republicii Democratice Congo?",
            "completed": false,
            "possibleAnswers": [
                {
                    "text": "A. Kinshasa",
                    "correct": true
                },
                {
                    "text": "B. Brazzaville",
                    "correct": false
                },
                {
                    "text": "C. Lubumbashi",
                    "correct": false
                },
                {
                    "text": "D. Kisangani",
                    "correct": false
                }
            ]
        },
        {
            "id": 7,
            "text": "Cine a construit primul avion metalic din lume?",
            "completed": false,
            "possibleAnswers": [
                {
                    "text": "A. Aurel Vlaicu",
                    "correct": true
                },
                {
                    "text": "B. Constantin Brâncuși",
                    "correct": false
                },
                {
                    "text": "C. Constantin Brâncoveanu",
                    "correct": false
                },
                {
                    "text": "D. Anghel Salignz",
                    "correct": false
                }
            ]
        },
        {
            "id": 8,
            "text": "Ce reprezintă celula eucariotă?",
            "completed": false,
            "possibleAnswers": [
                {
                    "text": "A. O celulă fără un nucleu definit",
                    "correct": false
                },
                {
                    "text": "B. O celulă cu un nucleu delimitat de un înveliș nuclear",
                    "correct": true
                },
                {
                    "text": "C. O celulă cu structură simplă, fără organite specifice",
                    "correct": false
                },
                {
                    "text": "D. O celulă care nu are mitocondrii",
                    "correct": false
                }
            ]
        },
        {
            "id": 9,
            "text": "Dacă aruncăm trei monede echilibrate, care este probabilitatea să obținem exact două capete?",
            "completed": false,
            "possibleAnswers": [
                {
                    "text": "A. 1/2",
                    "correct": false
                },
                {
                    "text": "B. 1/4",
                    "correct": false
                },
                {
                    "text": "C. 3/8",
                    "correct": true
                },
                {
                    "text": "D. 1/8",
                    "correct": false
                }
            ]
        },
        {
            "id": 10,
            "text": "Ce reprezintă \"API\" în programare?",
            "completed": false,
            "possibleAnswers": [
                {
                    "text": "A. Application Programming Interface",
                    "correct": true
                },
                {
                    "text": "B. Advanced Programming Instructions",
                    "correct": false
                },
                {
                    "text": "C. Automated Program Integration",
                    "correct": false
                },
                {
                    "text": "D. Application Performance Interface",
                    "correct": false
               
                }
            ]
        }
    ]
)
