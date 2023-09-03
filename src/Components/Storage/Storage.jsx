import cse from "../../assets/cse.png";
import it from "../../assets/it.jpg";
import eee from "../../assets/eee.png";
import mtr from "../../assets/mtr (1).png";
import civil from "../../assets/Civil.png";
import mech from "../../assets/mech.jpeg";
import ece from "../../assets/ece.png";
import aero from "../../assets/aero.jpeg";
import auto from "../../assets/AM.jpeg";
import ft from "../../assets/ft.png";
import AIDS from "../../assets/AI&DS department Pic.jpg";
import cse_00 from "../../assets/cse_00.png";
import cse_01 from "../../assets/quiz.jpg";
import cse_02 from "../../assets/cse_02.jpg";
import cse_03 from "../../assets/cse_03.png";
import ece_00 from "../../assets/ece_00.png";
import ece_01 from "../../assets/ece_01.png";
import ece_02 from "../../assets/quiz.jpg";
import ece_03 from "../../assets/ece_03.png";
import pro from "../../assets/pro.jpg";
import it_01 from "../../assets/it_01.png";
import it_02 from "../../assets/it_02.png";
import it_03 from "../../assets/it_03.png";
import pp from "../../assets/pp.jpg";
import ft_01 from "../../assets/ft_01.png";
import ft_02 from "../../assets/ft_02.png";
import ft_03 from "../../assets/ft_03.jpg";
import eee_00 from "../../assets/eee_00.png";
import eee_01 from "../../assets/eee_01.png";
import eee_02 from "../../assets/eee_02.png";
import eee_03 from "../../assets/eee_03.png";
import mtr_00 from "../../assets/mtr_00.png";
import mtr_01 from "../../assets/mtr_01.jpg";
import mtr_02 from "../../assets/mtr_02.png";
import mtr_03 from "../../assets/mtr_03.jpg";
import ai_00 from "../../assets/ai_00.jpg";
import aero_00 from "../../assets/aero_00.jpg";
import aero_01 from "../../assets/aero_01.png";
import aero_02 from "../../assets/aero_02.jpg";
import aero_03 from "../../assets/aero_03.png";
import ai_02 from "../../assets/ai_02.jpg";
import c_00 from "../../assets/c_02.png";
import c_01 from "../../assets/c_01.png";
import c_02 from "../../assets/c_03.png";
import c_03 from "../../assets/c_04.png";
import ai_03 from '../../assets/ai_03.jpg';
import ai_04 from "../../assets/ai_04.png";
import auto_00 from "../../assets/auto_00.png"

export const StorageData = [
    {
        departmentName: "Computer Science",
        departmentMotto: "Unleash the Power of Code: CSE Leading the Way!",
        eventCoordinator: "Aswin Kumar & Sangeetha ",
        faculty:"xxxxx",
        phoneNumber: "7548815022",
        image: cse,
        events: [
            {
                id: 0,
                eventName: "Spot'n Sort",
                shortDescription: 'Fix bugs.',
                description: "Debugging is the art of unraveling digital puzzles, converting glitches into graceful symphonies of code.",
                rules: [
                        "The event comprises two rounds.",
                    "Participants are expected to form a team of two members to participate in the event.",
                    "Participants should bring their own laptops with good Internet connectivity.",
                    "Participants are given codes with error and are expected to debug the same. ",
                    "Each round will have a predetermined time limit for solving the challenges.",
                    "Plagiarism, cheating, or any unethical behavior will result in immediate disqualification.",
                    "In all matters not covered by these rules and regulations, the decision of the organizers is final.",
                ],
                image: cse_00,
                details: {
                    venue: "Charles Babbage lab",
                    date: "22 Sep 2023",
                    time: "11:00AM - 12:30PM",
                },
                coordinator: {
                    name: "Samuel Abisheik",
                    phoneNumber: "7397442337",
                },
                faculty: {
                    name: "Ms.Sumithra"
                },
                departmentName: "Computer Science",
            },
            {
                id: 1,
                eventName: "Brain Byte Blitz",
                shortDescription: "Technical Quiz",
                description: "A competitive and intellectually stimulating quiz contest designed to assess participants knowledge and understanding of various technical subjects",
                rules: [
                    "The team should consist of one or two members per team",
                    "The use of mobile phones is strictly prohibited during the event",
                    "Each question has a specific time limit for answering.This time limit can vary based on the complexity of the round",
                    "Question can be multiple-choice, true/false, fill-in-the-blank",
                    "The questions can cover many topics including theoretical concepts,pratical applicants,historical developments, and emerging trends",
                    "In the event of a tie, Tie-breaker questions can be used to determine the winner. These questions are often more challenging"
                ],
                image: cse_01,
                details: {
                    venue: "S13",
                    date: "22 Sep 2023",
                    time: "11:00 AM - 12:30 PM",
                },
                coordinator: {
                    name: "A K Duvajaa",
                    phoneNumber: "9150667955",
                },
                faculty: {
                    name: "Ms.Bharathi"
                },
                departmentName: "Computer Science",
            },
            {
                id: 2,
                eventName: "CodeQuesters Challenge",
                shortDescription: "code with precision, execute with determination",
                description: "coding challenge with two rounds, code Quest prelims and Rapid Code Clash on HackerRank. Teams advance based on prelims performance. Goodluck",
                rules: [
                    "Team member size: 1",
                    "Teams are required to bring their own tools, including laptops and chargers.",
                    "During the contest, the use of external resources or references is strictly prohibited to ensure fairness.",
                    "The contest will be fully proctored to maintain a level playing field.",
                    "Participants are allowed to use the internet solely for accessing the HackerRank platform and submit answers to streamline participation.",
                    "Decisions made by the coordinators and faculty coordinators will be considered final and binding.",
                ],
                image: cse_02,
                details: {
                    venue: "CSE Lab 1 & 2",
                    date: "22 Sep 2023",
                    time: "1:30 PM - 3:30 PM",
                },
                coordinator: {
                    name: "Dhewagar G",
                    phoneNumber: "9962072963",
                },
                faculty: {
                    name: "Ms. Lavanya"
                },
                departmentName: "Computer Science",
            },
            {
                id: 3,
                eventName: "Concept cascade",
                shortDescription: "Innovate, Connect: Concept Cascade!",
                description: "Explore innovative concepts and foster connections at 'Concept Cascade': an event merging ideas, technology, and collaboration for progress.",
                rules: [
                    "Three/four members can take up a team.",
                    "Every team lead should be called to choose the topic based on chit picking.",
                    "It is not allowed to use any internet sources. If we found any of the team are using any internet sources that team will be disqualified.",
                    "The idea must be presented (no need of ppt)within five to ten minutes.",
                    "The chosen topic will have a 1.5-hour preparation session.  For the preparation time teams are only allowed to use paper and pen.",
                    "All must present the venue before 9 a.m. for the event.",
                ],
                image: cse_03,
                details: {
                    venue: "CSE Lab 2",
                    date: "23 Sep 2023",
                    time: "9:30 AM - 12:30 PM",
                },
                coordinator: {
                    name: "Merlin P",
                    phoneNumber: "6382401094",
                },
                faculty: {
                    name: "Ms. Saranya"
                },
                departmentName: "Computer Science",
            },
            
        ]
    },
    {
        departmentName: "Information Technology",
        departmentMotto: "IT Wizards -> Turning Glitches into Good Vibes!",
        eventCoordinator:"Mr. Prashanth",
        faculty:"xxxxx",
        phoneNumber: "8610661802",
        image: it,
        events: [
            {
                id: 0,
                eventName: "Innoventure",
                shortDescription: "Exploring innovations",
                description: "Join us for 'Innoventure' – a dynamic event igniting creativity, fostering collaboration, and celebrating innovation in the field of Information Technology.",
                rules: [
                    "Registered symposium attendees with ID cards can participate.",
                    "Participation allowed for individuals or teams of 3, with one project or idea per participant/team.",
                    "Submit a paper focused on the competition's theme, detailing the project's concept, approach, and potential impact.",
                    "Prepare two presentations: Traditional Paper Presentation (15 minutes) emphasizing technical details and development approach, and a Shark Tank Pitch (10 minutes) highlighting market potential, impact, unique features, investment, expected returns, and scalability.",
                    "Maintain professionalism, respect, and ethical behavior throughout the event.Plagiarism or misrepresentation will result in disqualification.",
                    "Scoring criteria include technical quality, market viability, presentation skills, and responses to questions All decisions made by the judges are final.",
                ],
                details: {
                    venue: "T07",
                    date: "22 SEP 2023",
                    time: "xxx",
                },
                image:pro,
                coordinator: {
                    name: "Neena",
                    phoneNumber: "7358540527",
                },
                faculty: {
                    name: "Ms. A. Anju"
                },
                departmentName: "Information Technology",
            },
            {
                id: 1,
                eventName: "Battle Royale Techfest",
                shortDescription: "Last man standing wins!",
                description: "Engage in the ultimate challenge at 'Battle Royale Techfest,' where participants compete head-to-head to showcase tactical prowess and strategy.",
                rules: [
                    "Participants must be registered attendees of the symposium and should bring their ID cards.",
                    "Participants must use mobile devices for gameplay. PC emulators are strictly prohibited, and participants should have their own data connection.",
                    "All players on a team must have a minimum ranking of level 30 in the selected game.",
                    "The Room ID and password for the match will be shared 15 minutes prior to the start of the game, and participants are expected to join promptly.",
                    "Any violation of in-game rules or unethical conduct will be thoroughly reviewed, and teams found in violation will be immediately disqualified from the event.",
                ],
                details: {
                    venue: "T10,S10",
                    date: "22 SEP 2023",
                    time: "9:30 AM",
                },
                image: it_01,
                coordinator: {
                    name: "Vignesh",
                    phoneNumber: "8248364360",
                },
                faculty: {
                    name: "Dr. S. Muthuselvan"
                },
                departmentName: "Information Technology",
            },
            {
                id: 2,
                eventName: "DebugXplorer",
                shortDescription: "Unleash Your Tech Ninja in DebugXplorer",
                description: "Embark on a tech journey like no other at DebugXplorer. Decode errors, navigate challenges, and emerge as the debugging champion!",
                rules: [
                    "Participation is exclusively open to registered symposium attendees. Teams must consist of 3 members.",
                    "Round 1 involves a tech trail to find concealed QR codes linked to hidden questions, encouraging collaborative interactions among participants.",
                    "In Round 2, participants receive questions from scanned QR codes, involving code debugging and problem-solving. Responses must be submitted within the stipulated timeframe.",
                    "Scoring and evaluation are based on technical accuracy in debugging, effective problem-solving, and responsiveness to questions. Impartial judges will determine scores.",
                    "Participants are expected to maintain a high level of professionalism, respect, and ethical behavior throughout the event.",
                ],
                details: {
                    venue: "IT Lab",
                    date: "23 Sep 2023",
                    time: "9:30 AM",
                },
                image: it_02,
                coordinator: {
                    name: "Sriram",
                    phoneNumber: "9786729217",
                },
                faculty: {
                    name: "Dr.Babymol Kurian"
                },
                departmentName: "Information Technology",
            },
            {
                id: 3,
                eventName: "Data Driven IPL Auction",
                shortDescription: "Strategize and Dominate: Data-Driven IPL Auction Challenge.",
                description: "Experience the future of IPL auctions through data-driven insights and strategies, revolutionizing team selections for the ultimate cricket showdown.",
                rules: [
                    "Participation is exclusively open to registered symposium attendees.",
                    "Individuals or teams of 2-5 members can participate.",
                    "The preliminary round will be conducted online, with the specific date announced via participants' WhatsApp group and email.",
                    "This round consists of a Cricket Quiz through an online portal, and only the top 10 teams will qualify for the next round.",
                    "The Auction Round, the final round, will be conducted offline and will assess teams' financial decision-making, statistical analysis, and critical thinking skills.",
                    "The decisions made by the auctioneer and judges are final, and participants are expected to maintain professionalism, respect, and ethical behavior throughout the event.",
                ],
                details: {
                    venue: "T07",
                    date: "23 Sep 2023",
                    time: "9:30 AM",
                },
                image: it_03,
                coordinator: {
                    name: "Harshithan",
                    phoneNumber: "8778725031",
                },
                faculty: {
                    name: "Ms.R.Adline Freeda"
                },
                departmentName: "Information Technology",
            },
        ]
    },
    {
        departmentName: "Mechanical",
        departmentMotto: "Mechanical Marvels -> Where Innovation Drives Motion!",
        eventCoordinator: "MUKESH KANNA M",
        phoneNumber: "8124392148",
        faculty:"xxxxx",
        image: mech,
        events: [
            {
                id: 0,
                eventName: "DESIGNO-THRON",
                shortDescription: 'Innovative designs enchancing industrial automation',
                description: "Create innovative designs using CAD software that can enchance current industrial automation.",
                rules: [
                    "The competition will consist of two rounds. After the release of the problem statement, the participants arrequested to submit the design perquisites according to specified constraints in the given time.",
                    "Each specification will carry some points which include details of the assembly for instances, accuracy in technical constraints, analysis of the design ,accuracy in measurements, etc given according to the question and its level of difficulty.",
                    "Models can be prepared using FUSION 360 software only.",
                    "On spot verification of the design with timeline will be noted based on the deadline.",
                    "Participants must necessarily install the software on their laptops or use any online service before participating in the event.",
                    "For the interview round, a series of questions related to the design and accuracy would be posed to the candidate who cleared the first round.",

                ],
                image: aero_01,
                details: {
                    venue: "Mechanical CAD Lab",
                    date: "22 Sep 2023",
                    time: "xxx",
                },
                coordinator: {
                    name: "MUKESH KANNA M",
                    phoneNumber: "+91 8124392148",
                },
                faculty: {
                    name: "DR D. EASU"
                },
                departmentName: "Mechanical",
            },
            {
                id: 1,
                eventName: "Idea Pitching",
                shortDescription: "Elevate Innovations: Unleash Ideas at Pitch Perfect.",
                description: "Step into the spotlight and share your groundbreaking ideas at our Idea Pitching Event, where innovation meets opportunity and growth.",
                rules: [
                    "Team should consist of maximum of 2 members.",
                    "A 10 Slide PPT pitch deck as per the format given below:",
                    "Title Slide",
                    "Problem definition",
                    "Problem Identification",
                    "Solution Slide",
                    "Social Impact Slide",
                    "One page lean canva business",
                ],
                image: pro,
                details: {
                    venue: "F14 Seminar Hall",
                    date: "23 Sep 2023",
                    time: "10:00 AM - 12:00 PM",
                },
                coordinator: {
                    name: "JAYARAMAN K",
                    phoneNumber: "+91 7277300365",
                },
                faculty: {
                    name: "Dr Z. Edward Kennedy"
                },
                departmentName: "Mechanical",
            },
            {
                id: 2,
                eventName: "ROBO - Assembly",
                shortDescription: "Build Bots, Engineer Future: Robo Assembly Challenge.",
                description: "Join the ultimate Robo Assembly event, showcasing engineering prowess as participants construct cutting-edge robots that define the future of automation.",
                rules: [
                    "Participants are requested to come to the venue on time.",
                    "All components required for the competition will be provided.",
                    "Only individual participants allowed (no teams).",
                    "Participants need to complete the assembly in first 40 minutes and coding part in next 20 minutes.",
                    "Code will be given with some errors, participants need to correct and run it.",
                    "Completion of assembly and coding within the time limit will be awarded.",
                    "No usage of mobiles during event.",
                ],
                image: mtr_01,
                details: {
                    venue: "Robotics Lab",
                    date: "22 Sep 2023",
                    time: "9:30 AM",
                },
                coordinator: {
                    name: "Dhanasekar R",
                    phoneNumber: "xxx",
                },
                faculty: {
                    name: "K.K.Manivannan"
                },
                departmentName: "Mechanical",
            },
            {
                id: 3,
                eventName: "Line Follower",
                shortDescription: "Precision Robotics: Line Follower Challenge",
                description: "Navigate the twists and turns of engineering excellence in our Line Follower event, where robots follow the path to victory.",
                rules: [
                    "Team Members - 3 (Max.)",
                    "Each member of the team must contain an identity card of his/her respected institute.",
                    "No test practice will be allowed on the arena.",
                    "The robot must not leave behind any of its parts during the run; else it will result in disqualification.",
                    "Unethical behaviour could lead to disqualification. Faculty coordinators have all the rights to take final decisions for any matter during the event.",
                    "Jury's decision will be considered final.",
                    "Certificates of Participation will be given to all teams except the Disqualified teams",
                ],
                image: mtr_03,
                details: {
                    venue: "Mechanical Class Room",
                    date: "23 Sep 2023",
                    time: "9:30 AM",
                },
                coordinator: {
                    name: "Harish G",
                    phoneNumber: "xxx",
                },
                faculty: {
                    name: "K.K.Manivannan"
                },
                departmentName: "Mechanical",
            },
        ]
    },
    {
        departmentName: "Automobile",
        departmentMotto: "Rev Up the Future -> Where Innovation Takes the Wheel!",
        eventCoordinator:"Mr.Sherin Chezhian A",
        faculty:"xxxxx",
        phoneNumber: "9514049967",
        image: auto,
        events: [
            {
                id: 0,
                eventName: "GREASE AND GEARS",
                shortDescription: "Hands-on Exploration of Dismantling and Assembling Components",
                description: "Deconstruct and Assemble Vehicle Components and dive into the inner workings of automobiles, mastering the art of dismantling and reassembling crucial parts for a comprehensive automotive understanding",
                rules: [
                    "Team member size: Max. 4 members.",
                    "Participants must strictly adhere to the instructions of the event coordinators.",
                    "Participants have to use the tools provided by the event coordinators.",
                    "Participants have to follow the safety precautions.",
                ],
                details: {
                    venue: "Hero Lab",
                    date: "22 SEP 2023",
                    time: "11:00 AM - 12:30 PM",
                },
                image: auto_00,
                coordinator: {
                    name: "Bhuvaneshwaran S K",
                    phoneNumber: "6381195783",
                },
                faculty: {
                    name: "Mr. Balamurugan.R"
                },
                departmentName: "Automobile",
            },
            {
                id: 1,
                eventName: "REV YOUR MIND",
                shortDescription: "Quiz and Interviews for Automotively driven minds!",
                description: "A platform to test Your Auto Acumen and engage in a stimulating automotive quiz and insightful interviews, showcasing industry expertise and passion.",
                rules: [
                    "Team member size: 2 or 3.",
                    "The use of mobile phones is prohibited during the event.",
                    "Participants must strictly adhere to the instructions of the event coordinators.",
                ],
                details: {
                    venue: "Bosch Lab",
                    date: "22 SEP 2023",
                    time: "2:00 PM - 3:30 PM",
                },
                image: cse_01,
                coordinator: {
                    name: "Jonathan P",
                    phoneNumber: "9384648938",
                },
                faculty: {
                    name: "Mr.Mathavan.S"
                },
                departmentName: "Automobile",
            },
            {
                id: 2,
                eventName: "START-UP GROUND",
                shortDescription: "Exploring cutting-edge start-ups in automobiles!",
                description: " Discovering pioneering ideas, disruptive technologies, and sustainable solutions transforming the driving experience in this insightful presentation.",
                rules: [
                    "Team member size: maximum 4 members",
                    "Maximum time limit 10 minutes per presentation",
                    "Present with Clarity and Share Accurate Info with Interactive Visuals",
                    "Must contain Technical &amp; Business aspect, market value and investment plan",
                ],
                details: {
                    venue: "Bosch Lab",
                    date: "23 SEP 2023",
                    time: "11:00 AM - 12:30 PM",
                },
                image:pro,
                coordinator: {
                    name: "Mr. DINESH KUMAR S ",
                    phoneNumber: "7358290558",
                },
                faculty: {
                    name: "Dr.A.Arivazhagan"
                },
                departmentName: "Automobile",
            },
            {
                id: 3,
                eventName: "DESIGN SPECTRUM",
                shortDescription: "Crafting automobiles Virtually!",
                description: "A platform to master vehicle design and to delve into the art of creating intricate automotive models using cutting-edge CAD technology.",
                rules: [
                    "Participants have to design and assemble the given automobile part on spot.",
                    "Participants should bring their own laptop with the software installed on it.",
                    "Any software can be used to draw and assemble.",
                    "Duration to design and assemble the parts will be 90 mins.",
                ],
                details: {
                    venue: "Bosch Lab",
                    date: "23 SEP 2023",
                    time: "9:30 AM",
                },
                image: aero_01,
                coordinator: {
                    name: "Arun Kumar S",
                    phoneNumber: "7448950590",
                },
                faculty: {
                    name: "Mr.M.Nelson Prem Kumar"
                },
                departmentName: "Automobile",
            },
        ]
    },
    {
        departmentName: "Civil",
        departmentMotto: "Building the World, Brick by Brick.",
        eventCoordinator: "Mruthulha N",
        faculty:"xxxxx",
        phoneNumber: "8056069130",
        image: civil,
        events: [
            {
                id: 0,
                eventName: "Bridge It",
                shortDescription: 'Engineering crossovers, forging connections: Bridge It.',
                description: "Connecting Innovations, Engineering, and Society. Explore the forefront of civil engineering's contribution to safe and sustainable bridge design.",
                rules: [
                    "2 hours time will be given along with 150 ice cream sticks and glue.",
                    "Bridges should be built in that span of time.",
                    "The bridge which withstands the maximum load wins.",
                    "Students will be split in team of three. ",
                    "Extra glue will not be given.",
                    "Extra sticks will not be given as well.",
                ],
                image: c_00,
                details: {
                    venue: "Concrete and highway Lab",
                    date: "22 SEP 2023",
                    time: "11:00AM - 12:30PM",
                },
                coordinator: {
                    name: "Monaj Kumar J N",
                    phoneNumber: "6381474648",
                },
                faculty: {
                    name: "Ms.Sabaripriya U"
                },
                departmentName: "Civil",
            },
            {
                id: 1,
                eventName: "Brick It",
                shortDescription: "Building dreams with bricks!",
                description: "Unleashing Creativity in Construction and witnessing innovative brickwork designs and techniques in the realm of civil engineering",
                rules: [
                    "Bonds of brick will be shown in picture.",
                    "Types of bond given should be identified.",
                    "The bond should be arranged in given bricks.",
                    "Team that takes the shortest time to arrange wins.",
                    "Students will be grouped in three.",
                ],
                image: c_01,
                details: {
                    venue: "Concrete and Highway Lab",
                    date: "23 SEP 2023",
                    time: "9:30 AM - 12:30 PM",
                },
                coordinator: {
                    name: "Nirajan P",
                    phoneNumber: "6381506345",
                },
                faculty: {
                    name: "Mr.Akin C"
                },
                departmentName: "Civil",
            },
            {
                id: 2,
                eventName: "Draftomania",
                shortDescription: 'Architectural precision showcased through Draftomania',
                description: "Tracing the Future of design and exploring precision and creativity in architectural drafting within the civil engineering field.",
                rules: [
                    "Individual participation.",
                    "The competition will have two rounds.",
                    "First round will be MCQ based.",
                    "Qualifiers will move on to Second round. ",
                    "In the second round, specifications will be provided and participants should draft accordingly.",
                    "The time allotted for each participant is 1hr.",
                ],
                image: c_02,
                details: {
                    venue: "Civil CAD Lab",
                    date: "22 SEP 2023",
                    time: "11:00AM - 12:30PM",
                },
                coordinator: {
                    name: "Prince Ragul V",
                    phoneNumber: "9944408910",
                },
                faculty: {
                    name: "Mr.Philips J"
                },
                departmentName: "Civil",
            },
            {
                id: 3,
                eventName: "Poster/Paper Presentation",
                shortDescription: "Innovative Solutions Shaping Future Urban Infrastructure",
                description: "Unveiling Sustainable Infrastructure solutions and delve into pioneering research and shaping our urban future.",
                rules: [
                    "Topics will be announced beforehand .",
                    "The best technical / sound presentation will be nominated.",
                    "A team can have a minimum of 1 to maximum of 4 participation.",
                    "The time allotted for each team is 15 mins.",
                ],
                image: c_03,
                details: {
                    venue: "Civil CAD Lab",
                    date: "23 SEP 2023",
                    time: "9:30 AM - 11:30 AM",
                },
                coordinator: {
                    name: "Padmashree P",
                    phoneNumber: "9677017466",
                },
                faculty: {
                    name: "Ms.Praicy M"
                },
                departmentName: "Civil",
            },
        ]
    },
    {
        departmentName: "Aero",
        departmentMotto: "Reaching New Heights, Defying Gravity.",
        eventCoordinator:"Mr.Sujith Ananth T",
        faculty:"xxxxx",
        phoneNumber:"7305275522",
        image:aero,
        events: [
            {
                id: 0,
                eventName: "Air Crash Investigation",
                shortDescription: "Analyzing tragedy to enhance aviation safety.",
                description: "A simulated experience where participants analyze and solve aviation mysteries, combining critical thinking and problem-solving to uncover the causes behind simulated aircraft accidents.",
                rules: [
                    "Team members: minimum 1 and maximum 4.",
                    "2 rounds will be conducted.",
                    "Round 1: Quiz based on significant air crash, quiz can be attended at any 20 mins in the forenoon of day 1.",
                    "Round 2: Specified 1:30 hrs in the afternoon. Identifying the air crash,Presenting a solution to the jury, and making a report of it",
                    "Participants should not use their phones; however, discussion is allowed only within the team during the event.",
                    "A general knowledge question will be asked in round 2, upon answering team will have an advantage.",
                    "Top 3 teams will be declared as winners",
                    "Failure in adhering to the rules can lead to immediate disqualification",
                ],
                details: {
                    venue: "Aero block - F 53",
                    date: "22 SEP 2023",
                    time: "9:30 AM",
                },
                image: aero_00,
                coordinator: {
                    name: "Mr. A B Kesav kumar",
                    phoneNumber: "9150955644",
                },
                faculty: {
                    name: "Mr.S. Venkatramanan"
                },
                departmentName: "Aero",
            },
            {
                id: 1,
                eventName: "CAD Modelling",
                shortDescription: "Creativity merge of Aero designs!",
                description: "A specialized competition where participants demonstrate their prowess in computer-aided design, constructing intricate aerospace models that embody both precision and creativity, encapsulating the essence of aviation innovation.",
                rules: [
                    "Team members: maximum 2 (per team)",
                    "Durations: 1hrs.",
                    "The task will be disclosed to the participants during the competition.",
                    "Participants must bring their own laptop installed with any of the following 3d Modelling software: CATIA/ Solid works/ Creo.",
                    "The given task should be completed with proper dimensions and constraints.",
                    "Evaluation would be based on the proficiency of the participant for the process of modelling.",
                    "Preliminary stage of the competition will be in the mode of quiz. ",
                    "The final results will be based on the completeness and optimum usage of the software.",
                    "No technical support will be provided during that time",
                    "Rules should be followed properly, if not the participant(s) will be disqualified.",
                ],
                details: {
                    venue: "Aero CAD Lab",
                    date: "23 Sep 2023",
                    time: "9:30 AM",
                },
                image: aero_01,
                coordinator: {
                    name: "Mr. Giridharan",
                    phoneNumber: "6380102078",
                },
                faculty: {
                    name: "Dr.S. Thamaraikannan"
                },
                departmentName: "Aero",
            },
            {
                id: 2,
                eventName: "Water Rocker",
                shortDescription: "Hydro Tech Triumph: Water Rocker Challenge",
                description: "Dive into innovation with Water Rocker, a riveting event where aquatic robots compete, pushing the boundaries of hydro-technology and creativity.",
                rules: [
                    "Water rockets can have multiple stages. Parachute, gliding and other mechanical launch mechanisms are allowed. Booster mechanisms are allowed as well.",
                    "Use of electronic components and chemical explosives are banned.",
                    "Teams are advised to get more than one water rocket, in case of any damage to one. But the water rockets must be identical.",
                    "Water rockets for different rounds could be different, but for the same round, they must use the same water rocket.",
                    "Two trials will be given and best two will be taken into consideration.",
                    "The team will be disqualified if the model is found to be dangerous in anyway. Decision of the organisers is final.",
                    "The rocket body should be made only with plastic bottles of aerated soft drinks of maximum capacity 2.5L and should be free of any fabrication failures or dents caused by heat exposure. More than one bottle can be used but the total volume must be less than 2.5L",
                    "Participants are supposed to get their own launching pads and same launching pad cannot beshared by other teams.",
                    "Maximum pressure supported 60psi",
                    "The provided foot pump will only be compatible with common bicycle valves.",
                    "The organization only provides water, a measuring cup, a bucket and compressors (which will have an in-built pressure gage). Other materials will NOT be provided. However, you could buy items in the stationary shops in the campus.",
                ],
                details: {
                    venue: "Ground",
                    date: "22 SEP 2023",
                    time: "9:30 AM",
                },
                image:aero_02,
                coordinator: {
                    name: "Mr. Vinith Ram",
                    phoneNumber: "8248681808",
                },
                faculty: {
                    name: "Dr.R. Naveen"
                },
                departmentName: "Aero",
            },
            {
                id: 3,
                eventName: "Paper Presentation",
                shortDescription: "Showcase your aviation insights.",
                description: "An avenue for aviation enthusiasts to share pioneering research, exchange insights, and stimulate discussions in the field of aeronautics, cultivating progress and expertise within the aerospace realm.",
                rules: [
                    "It should be your own work.",
                    "Minimum 1 or team of 2 members can participate.",
                    "Timing: 8 minutes for presentation and 2 minutes for questions and answers.",
                    "Participants should bring their presentation in ppt format in your own pendrive.",
                    "Hard copy of your abstract should submit 5-3 days before the competition",
                ],
                details: {
                    venue: "Aero block - F 53",
                    date: "23 Sep 2023",
                    time: "9:00 AM - 12:30 PM",
                },
                image:pp,
                coordinator: {
                    name: "Ragupathi P",
                    phoneNumber: "8124989036",
                },
                faculty: {
                    name: "Mr.Dhamodaran K"
                },
                departmentName: "Aero",
            },
        ]
    },
    {
        departmentName: "Mechatronics",
        departmentMotto: "Where Mechanics Meets Electronics in Perfect Harmony",
        eventCoordinator: "B.KANNAN",
        faculty:"xxxxx",
        phoneNumber:"9940174768",
        image: mtr,
        events: [
            {
                id: 0,
                eventName: "Quiz",
                shortDescription: 'Cross-disciplinary minds clash!',
                description: "A knowledge showdown where participants engage in a captivating quiz, testing their multidisciplinary skills at the intersection of mechanics, electronics, and automation, fostering intellectual growth and collaboration.",
                rules: [
                    "The teams will compete one on one, each team competing with another",
                    "Teams that qualify the initial knock out rounds will compete in the qualifiers, semifinals and finals",
                    "The rounds will have 10 questions; First 8 questions will have 10 points if the team answers without a hint and 5 points with the hint. The last two will be bonus questions with 15 points each without hint and 10 points with hint.",
                    "Once the question is read the team will have 15 seconds for answering. The first team to ring the bell will be given the chance to answer first. ",
                    "If the team fails to answer correctly, the question will pass to the opponent team and will be awarded for right answer.",
                    "The team with highest number of points will qualify for the next round In case of a draw the teams will be given 3-5 extra questions",
                    "The teams can have 2-4 members. Only the members attending the quiz in-person will be given the participation certificate.",
                ],
                image: cse_01,
                details: {
                    venue: "Robotics Lab",
                    date: "22 SEP 2023",
                    time: "11:00AM - 01:00PM",
                },
                coordinator: {
                    name: "Menmozhi",
                    phoneNumber: "9360338336",
                },
                faculty: {
                    name: "Bhavani Bharathi. G"
                },
                departmentName: "Mechatronics",
            },
            {
                id: 1,
                eventName: "ROBO-Assembly",
                shortDescription: "Build bots, forge teamwork!",
                description: "A hands-on engineering challenge where participants construct robots, demonstrating mechanical aptitude, teamwork, and problem-solving skills to create functional robotic systems within a competitive environment.",
                rules: [
                    "Participants are requested to come to the venue on time.",
                    "All components required for the competition will be provided.",
                    "Only individual participants allowed (no teams).",
                    "Participants need to complete the assembly in first 40 minutes and coding part in next 20 minutes.",
                    "Code will be given with some errors, participants need to correct and run it.",
                    "Completion of assembly and coding within the time limit will be awarded.",
                    "No usage of mobiles during event.",
                ],
                image: mtr_01,
                details: {
                    venue: "Robotics Lab",
                    date: "22 SEP 2023",
                    time: "01:30PM - 03:00PM",
                },
                coordinator: {
                    name: "Lokkesh R B",
                    phoneNumber: "8489574758",
                },
                faculty: {
                    name: "K.K.Manivannan"
                },
                departmentName: "Mechatronics",
            },
            {
                id: 2,
                eventName: "Paper Presentation",
                shortDescription: 'Exploring ideas and sharing knowledge!',
                description: "A platform for showcasing innovative research at the nexus of mechanics and electronics, encouraging knowledge exchange and fostering advancements in interdisciplinary fields.",
                rules: [
                    "A team can have a minimum of 2 and a maximum of 5 members.",
                    "You will be given a total of 10 minutes for presentation. 7 minutes for presentation and 3 minutes for Q & A.",
                    "A warning bell will be given at the 5th minute &amp; a final bell.",
                    "If you exceed the presentation time marks will be deducted.",
                    "The presentation can have a maximum of 12 slides.",
                    "The presentation must have both technical and business aspects of the project.",
                    "Project working video can be added with a maximum duration of 2 minutes.",
                    "Images used in ppt must not be from the internet.",
                    "Evaluation will be based on innovation, technical aspects, marketing/business model,presentation &amp; feasibility.",
                    "Presentation marks will be based on team participation.",

                ],
                image: pp,
                details: {
                    venue: "Robotics Lab",
                    date: "23 SEP 2023",
                    time: "11:00AM - 12:30PM",
                },
                coordinator: {
                    name: "Sugavaneshwar",
                    phoneNumber: "9361715949",
                },
                faculty: {
                    name: "Dr.T.Raja"
                },
                departmentName: "Mechatronics",
            },
            {
                id: 3,
                eventName: "Line Follower",
                shortDescription: "Autonomous bots navigates and guides",
                description:"A robotics competition where autonomous robots navigate intricate paths by following lines, showcasing precision, sensor integration, and programming skills in an engaging technical showcase.",
                rules: [
                    "Team Members - 3 (Max.)",
                    "Each member of the team must contain an identity card of his/her respected institute.",
                    "No test practice will be allowed on the arena.",
                    "The robot must not leave behind any of its parts during the run; else it will result in disqualification.",
                    "Unethical behaviour could lead to disqualification. Faculty coordinators have all the rights to take final decisions for any matter during the event.",
                    "Jury's decision will be considered final.",
                    "Certificates of Participation will be given to all teams except the Disqualified teams",
                ],
                image: mtr_03,
                details: {
                    venue: "Robotics Lab",
                    date: "23 SEP 2023",
                    time: "9:30 AM",
                },
                coordinator: {
                    name: "Balaji R",
                    phoneNumber: "9092028797",
                },
                faculty: {
                    name: "K.K.Manivannan"
                },
                departmentName: "Mechatronics",
            },
        ]
    },
    {
        departmentName: "EEE",
        departmentMotto: "Empowering the World, One Electron at a Time.",
        eventCoordinator:"Mr. Dinesh S",
        faculty:"xxxxx",
        phoneNumber:"9360015882",
        image: eee,
        events: [
            {
                id: 0,
                eventName: "EV Design Challenge",
                shortDescription: "Challenge to envision green mobolity!",
                description: "A competition driving innovation where participants engineer sustainable electric vehicle solutions, merging technology and design for a greener transportation future.",
                rules: [
                    "Participants should follow the instructions given by the coordinators.",
                    "Participants should bring their prototype model.",
                    "Complete working module of the project is mandatory.",
                ],
                details: {
                    venue: "G02/machines Lab",
                    date: "22 SEP 2023",
                    time: "9:30 AM",
                },
                image: eee_00,
                coordinator: {
                    name: "Arjun S",
                    phoneNumber: "08467248067",
                },
                faculty: {
                    name: "Mr. Balaji S"
                },
                departmentName: "EEE",
            },
            {
                id: 1,
                eventName: "Technical Quiz",
                shortDescription: "Electrifying challenge to test your knowledge.",
                description: "A competitive knowledge showdown where electrical enthusiasts test their expertise, solving intricate problems and showcasing their grasp of technical concepts in an electrifying event.",
                rules: [
                    "Participants should follow the instructions given by the coordinators.",
                    "Maximum three members per team and time limit will given for each question.",
                    "No mobile phones are allowed during quiz.",
                ],
                details: {
                    venue: "G01",
                    date: "23 SEP 2023",
                    time: "9:30 AM",
                },
                image: cse_01,
                coordinator: {
                    name: "Mr.Manoj Devabhraj",
                    phoneNumber: "08467248067",
                },
                faculty: {
                    name: "Ms. A.V. Suganya"
                },
                departmentName: "EEE",
            },
            {
                id: 2,
                eventName: "Project Expo",
                shortDescription: "Exploring creativity, knowledge, and innovation",
                description: " A dynamic platform where creators showcase their innovative projects, bridging theory and application, and fostering collaboration, learning, and inspiration among attendees.",
                rules: [
                    "Participants should follow the instructions given by the coordinators.",
                    "Participants should bring their report and also working module of the project.",
                    "Any type of electrical and electronics projects are allowed with complete design.",
                ],
                details: {
                    venue: "EEE 2nd floor Lab",
                    date: "23 SEP 2023",
                    time: "9:30 AM",
                },
                image: eee_02,
                coordinator: {
                    name: "Mr. Joshua Stephen",
                    phoneNumber: "08467248067",
                },
                faculty: {
                    name: "Dr. Murugan R"
                },
                departmentName: "EEE",
            },
            {
                id: 3,
                eventName: "Paper presentation",
                shortDescription: "Exploring ideas and sharing knowledge!",
                description: "Paper presentation is a platform for sharing insightful research and innovative ideas, where presenters showcase their findings to an audience, fostering knowledge exchange and academic discourse.",
                rules: [
                    "Participants should follow the instructions given by the coordinators.",
                    "Participants should bring their project report(hard copy) and also softcopy for presentation.",
                    "The allotted time for particular paper presentation will be 3-5min.",
                ],
                details: {
                    venue: "EEE Conference Room",
                    date: "22 SEP 2023",
                    time: "9:30 AM",
                },
                image: pp,
                coordinator: {
                    name: "Mr. RahulRaj",
                    phoneNumber: "08467248067",
                },
                faculty: {
                    name: "Ms. Lavanya"
                },
                departmentName: "EEE",
            },
        ]
    },
    {
        departmentName: "Fashion Technology",
        departmentMotto: "Innovate, Create, Elevate: Where Fashion Meets Technology",
        eventCoordinator: "Jayadharshini R",
        faculty:"xxxxx",
        phoneNumber: "9176225193",
        image: ft,
        events: [
            {
                id: 0,
                eventName: "Paper Presentation",
                shortDescription: 'Exploring ideas and sharing knowledge!',
                description: "Paper Presentation is a platform for sharing insightful research and innovative ideas, where presenters showcase their findings to an audience, fostering knowledge exchange and academic discourse.",
                rules: [
                    "THEMES:", 
                    "1)Role of New Technologies in fashion industry",
                    "2)National differences in fashion.",
                    "3)Fashion appearance as identity",
                    "Participants can be individual or team of 2 members.",
                    "Each presentation should last 5 to 10 mins including jury quries",
                ],
                image: pp,
                details: {
                    venue: "Patten Engineering Lab / 4018",
                    date: "22 SEP 2023",
                    time: "11:00AM - 12:30PM",
                },
                coordinator: {
                    name: "Miss. Mahalakshmi",
                    phoneNumber: "6303601503",
                },
                faculty: {
                    name: "Ms. Sri Tanush Pandian PV"
                },
                departmentName: "Fashion Technology",
            },
            {
                id: 1,
                eventName: "Product Presentation",
                shortDescription: "Innovate, showcase and captivate",
                description: "Showcasing innovation and functionality, creators unveil their products to an audience, highlighting features, benefits, and design intricacies in a captivating display of creativity and utility",
                rules: [
                    "Posters can be digital or non-digital",
                    "Product should be submitted with a write up",
                    "Participants can be individual or team of 2 members",
                    "Products should be present with posters",
                    "Each presentation should last 5 to 10 mins including jury quries",
                ],
                image: ft_01,
                details: {
                    venue: "Patten Engineering Lab / 4018",
                    date: "23 Sep 2023",
                    time: "9:00 AM - 10:30 AM",
                },
                coordinator: {
                    name: "Miss. Pavithra S ",
                    phoneNumber: "6303601503",
                },
                faculty: {
                    name: "Ms. Sri Tanush Pandian PV"
                },
                departmentName: "Fashion Technology",
            },
            {
                id: 2,
                eventName: "3D fashion Illustration",
                shortDescription: 'Evolves fashion through 3D innovation ',
                description: "A platform to redefine the fashion landscape by integrating cutting-edge technology into clothing design, revolutionizing aesthetics and functionality for futuristic style expressions.",
                rules: [
                    "On spot theme",
                    "Illustration can be digital or hand sketch",
                    "required materials, laptop should be brought by students",
                    "Fashion illustrations should be submitted with a write up with",
                    "Clear Description of fabrics, embellishment, accessories along with illustration.",
                    "Illustrations should be 3D",
                ],
                image: ft_02,
                details: {
                    venue: "Illustration Lab / 4017",
                    date: "22 SEP 2023",
                    time: "11:00AM - 12:30PM",
                },
                coordinator: {
                    name: "Abi M",
                    phoneNumber: "8098839376",
                },
                faculty: {
                    name: "Mrs. Dharaga Selvi D."
                },
                departmentName: "Fashion Technology",
            },
            {
                id: 3,
                eventName: "Draping",
                shortDescription: "Unveiling artistry through innovative designs!",
                description: "Draping is a platform to Showcase creativity and fashion expertise as participants drape fabric into stunning designs, highlighting artistic flair and skillful manipulation in a visual spectacle of textiles.",
                rules: [
                    "On spot theme, partcipants should come with models",
                    "Individual participants can present 3",
                    "Team of 2 can present 4 ",
                    "Team of 4 can present 6 ",
                    "Stitches can also be used at certain areas {if necessary} Showcase your",
                    "garments with clear Description of fabrics, embellishment, accessories.",
                    "Credits will be included for makeup and accessories",
                ],
                image: ft_03,
                details: {
                    venue: "Illustration Lab / 4017",
                    date: "23 Sep 2023",
                    time: "11:00 AM - 12:30 PM",
                },
                coordinator: {
                    name: "Mr. Jayanth ",
                    phoneNumber: "9346582912",
                },
                faculty: {
                    name: "Mrs. Jayanthi G"
                },
                departmentName: "Fashion Technology",
            },
        ]
    },
    {
        departmentName: "ECE",
        departmentMotto: "Powering Progress, Connecting the Future.",
        eventCoordinator:"Mr. Aadil Mohideen",
        faculty:"xxxxx",
        phoneNumber:"6383615182",
        image: ece,
        events: [
            {
                id: 0,
                eventName: "Technostrom",
                shortDescription: "Exploring ideas and sharing knowledge!",
                description: "TechnoStrom is a platform to present their research, exchange insights, and engage in academic dialogue, fostering knowledge dissemination and intellectual growth.",
                rules: [
                    "Teams can have a maximum of 3 members from any academic background.",
                    "The paper's theme should revolve around Electronics and Communication, focusing on innovative solutions for societal issues.",
                    "Teams can choose from suggested domains, including Communications, VLSI Design, Robotics, Wireless Sensor Networks, and AI/ML applications in electronics.",
                    "All papers must be submitted in IEEE format.",
                    "Plagiarism or copy-paste is strictly prohibited; violations will result in disqualification.",
                    "Abstracts must be emailed to technostorm123@gmail.com with the domain and team name by the specified deadline.",
                    "Acceptance emails will be sent on a predetermined date.",
                    "Each team will have an 8-minute presentation during the Symposium, followed by a 2-minute Q&A session",
                    "Judging criteria include innovation, technical excellence, understanding, relevance, and presentation quality. Two winners will be selected regardless of the domain.",
                ],
                details: {
                    venue: "IOT Lab",
                    date: "22 SEP 2023",
                    time: "11:00 AM - 1:00 PM",
                },
                image: ece_00,
                coordinator: {
                    name: "Ms. Johanna Afreena I",
                    phoneNumber: "9444344277",
                },
                faculty: {
                    name: "Dr.C Umakumari "
                },
                departmentName: "ECE",
            },
            {
                id: 1,
                eventName: "Ideatronics",
                shortDescription: "Fusing innovation, technology and solutions",
                description: "Solution Finderz Ideatronics is a dynamic innovation event where teams collaborate to devise ingenious solutions by melding cutting-edge technologies, fostering creativity, and addressing real-world challenges with fresh perspectives.",
                rules: [
                    "Timing : 9 am to 1pm.",
                    "Team size : 2 to 4 members.",
                    "1 Domain per Team.",
                    "Any resources and tools can be used to ideate, but mention the platform used.",
                    "Idea presentation must contain the criterias mentioned for evaluation.",
                    "Time limits will be strictly enforced.",
                    "Judges decision will be final.",
                    "Each team will have 3-4 Minutes of presentation for evaluation.",
                ],
                details: {
                    venue: "IOT Lab",
                    date: "23 SEP 2023",
                    time: "9:00 AM - 1:00 PM",
                },
                image: pro,
                coordinator: {
                    name: "Ms. Nehameena R",
                    phoneNumber: "8610233892",
                },
                faculty: {
                    name: "Dr.Thomas Leonid"
                },
                departmentName: "ECE",
            },
            {
                id: 2,
                eventName: "Techwar",
                shortDescription: "Test your tech knowledge, conquer, win.",
                description: "TechWar is a battle of wits where tech enthusiasts test their knowledge, compete, and emerge victorious in a thrilling quizzing showdown.",
                rules: [
                    "Pen and Paper Quiz: 15 questions (9 technical, 6 general), 8 teams selected.",
                    "Buzzer Round: Identify equipment and inventors, top 4 teams advance.",
                    "Final Round - Rapid Fire: Teams answer 10 questions in 90 seconds.",
                    "Top 2 teams in the final round win.",
                ],
                details: {
                    venue: "F01",
                    date: "22 Sep 2023",
                    time: "11:00 AM - 1:00 PM",
                },
                image: ece_02,
                coordinator: {
                    name: "Mr. Aravinth P",
                    phoneNumber: "7397392763",
                },
                faculty: {
                    name: "Mr.Sadasivam"
                },
                departmentName: "ECE",
            },
            {
                id: 3,
                eventName: "ElectroMindz",
                shortDescription: "Exploring innovations in the field of electronics at Electromindz",
                description: "ElectroMinds is a platform to showcase ingenious innovations and breakthroughs in the field of electronics, uniting creators to explore cutting-edge projects and ideas",
                rules: [
                    "Teams of 2-3 members allowed.",
                    "Cross-disciplinary teams welcome.",
                    "Projects must align with Green Energy, IoT, or Advanced Communication Systems.",
                    "Social relevance required.",
                    "Prepare a concise PowerPoint presentation.",
                    "Ten teams will be selected from round one to go to round two which will take place on day two",
                    "Teams selected for day two will need to have a functioning prototype ready of their project",
                    "Judging based on innovation, technical excellence, and presentation quality.",
                    "Two winners chosen irrespective of category.",
                ],
                details: {
                    venue: "Optical Lab",
                    date: "22 Sep 2023(Round 1), 23 Sep 2023(Round 2)", 
                    time: "2:00 PM - 5:00 PM(Round 1), 9:00 AM - 1:00 PM(Round 2)",
                },
                image: ece_03,
                coordinator: {
                    name: "Fahima Niaz",
                    phoneNumber: "7305501928",
                },
                faculty: {
                    name: "Mr.Harish "
                },
                departmentName: "ECE",
            },
        ]
    },
    {
        departmentName: "AI&DS",
        departmentMotto: "Empowering Tomorrow with AI & Data Science Today!",
        eventCoordinator:"Vignesh G",
        faculty:"xxxxx",
        phoneNumber:"8610975473",
        image: AIDS,
        events: [
            {
                id: 0,
                eventName: "Ghost Debug Exorcism",
                shortDescription: "Unveiling Code Spirits",
                description: "Calling all brave souls! Dive into our realm, where you'll navigate a chilling ghost story and mysterious debugging. Join this thrilling adventure and become a Ghost Buster. Will you answer the spectral call?",
                rules: [
                    "Teams of maximum 3 members with coding knowledge and debugging skills.",
                    "First round will be based on solving coding crypt. Second and Third round will be instructed at the time of event.",
                    "Participants can bring their own laptops.",
                    "Online platforms can be used if necessary.",
                    "The number of teams advancing will be determined by the organizers based on the competition structure.",
                    "The winners will be decided based on the maximum points they're obtaining capturing the ghosts.",
                ],
                details: {
                    venue: "Intelligence lab",
                    date: "22 SEP 2023",
                    time: "11:00 AM - 3:30 PM",
                },
                image: ai_00,
                coordinator: {
                    name: "Sriram A",
                    phoneNumber: "72996 50059",
                },
                faculty: {
                    name: "Dr. S. Bairavel"
                },
                departmentName: "AIDS",
            },
            {
                id: 1,
                eventName: "PaperFest",
                shortDescription: "Innovate, Optimize, Elevate",
                description: "Welcome to PaperFest – where innovation takes center stage! Gather your team of up to three participants for an electrifying challenge. We provide the research papers; you provide the magic.your mission?supercharge these papers with your genius. Craft captivating PowerPoint presentations to showcase your innovation.",
                rules: [
                    "Teams can have a maximum of three members. Teams with more than three members won't qualify.",
                    "This event is open to students from any technical background. Make sure to have valid identification during registration.",
                    "Bring your own laptop for creating and presenting your work.",
                    "Choose one of the three domains: AI with IoT, Core AI, or Blockchain.",
                    "Build your presentation based on the provided research papers, with a focus on improving solutions in your chosen domain.",
                    "Stay on schedule! Each team gets 10 minutes for their presentation, including the Q&A session."
                ],
                details: {
                    venue: "T12",
                    date: "22 SEP 2023",
                    time: "9:30 AM - 12:30 PM",
                },
                image: ai_04,
                coordinator: {
                    name: "Muskan P",
                    phoneNumber: "9342806082",
                },
                faculty: {
                    name: "C.SURESHKUMAR"
                },
                departmentName: "AIDS",
            },
            {
                id: 2,
                eventName: "OptiHack",
                shortDescription: "Level-up your imagination",
                description: "Welcome to the world of the unordinary. where the frontend means more than HTML and CSS. where the goal is beyond just completion .Gear up for a high-octane immersion into the heart of code optimization.",
                rules: [
                    "Participants can either compete individually or form teams of up to two members.",
                    "Participants will receive a sample website and a well-defined problem statement.",
                    "Your task is to optimize the website to perfectly match and elevate the specified requirements.",
                    "Put on your thinking cap and come up with ingenious ways to enhance the website's performance and user experience.",
                    "Novel methods of optimization, such as UI/UX designing, technical SEO, voice search optimization, etc,. are higly admired.",
                    "Our judges will assess the optimizations based on creativity, impact, and alignment with the problem statement.",
                ],
                details: {
                    venue: "Intelligence Lab",
                    date: "23 SEP 2023",
                    time: "9:30 AM - 12:30 PM",
                },
                image: ai_02,
                coordinator: {
                    name: "Ramya R",
                    phoneNumber: "9176123091",
                },
                faculty: {
                    name: "Ms. D. Arthi Prakash"
                },
                departmentName: "AIDS",
            },
            {
                id: 3,
                eventName: "Insight-Ignite",
                shortDescription: "Navigate markets, win big at Insight-Ignite ",
                description: "Embark on a thrilling journey in our competition. You'll unlock an exclusive dataset, grapple with intriguing problems, dive deep into data, craft stunning visualizations, and strategize your way to victory.",
                rules: [
                    "Each team can have up to three participants.",
                    "Participants should have basic data analytics and visualization skills.",
                    "Participants can use any visualization and analysis tools.",
                    "Dataset will be provided onsite.",
                    "First round begins with MCQ's based on the given data.",
                    "Second round and third round will be instructed at the time of event.",
                    "Submissions after the time limit will be disqualified.",
                ],
                details: {
                    venue: "T12",
                    date: "23 SEP 2023",
                    time: "11:30 AM - 3:30 PM",
                },
                image: ai_03,
                coordinator: {
                    name: "Shaun R",
                    phoneNumber: "9344587251",
                },
                faculty: {
                    name: "Ms. S. Aishwarya"
                },
                departmentName: "AIDS",
            },
        ]
    },
]