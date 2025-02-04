import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    redux,
    summiz,
    tailwindcss,
    threads,
    java,
    mysql,
    college,
    school,
    python,
    golang,
    spark,
    hadoop,
    linux,
    arangodb,
    aws,
    docker,
    rabbitmq,
    haproxy,
    kafka,
    fastapi,
    flask,
    nferencelogo,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: golang,
        name: "Golang",
        type: "Backend",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "OS",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: spark,
        name: "Apache Spark",
        type: "Database",
    },
    {
        imageUrl: hadoop,
        name: "Hadoop",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: arangodb,
        name: "ArangoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "OS for containers",
    },
    {
        imageUrl: rabbitmq,
        name: "RabbitMQ",
        type: "Open source message broker",
    },
    {
        imageUrl: haproxy,
        name: "HAProxy",
        type: "Proxy",
    },
    {
        imageUrl: kafka,
        name: "Kafka",
        type: "Proxy",
    },
    {
        imageUrl: fastapi,
        name: "FastAPI",
        type: "api",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "api",
    },
];

export const educations = [
    {
        title: "Software Devlopment Engineer Intern",
        institution_name: "Nference Labs",
        icon: nferencelogo,
        iconBg: "#ffff",
        date: "Mar 2024 - Present",
        points: [

            "Currently working at Nference Labs, Coimbatore, with hands-on experience in Python, Golang, and a wide range of modern technologies.",
            "Skilled in Spark, Hadoop, and AWS, essential tools for data processing and cloud solutions.",
            "Experienced with Docker, RabbitMQ, HAProxy, Kafka, FastAPI, and Flask, enhancing backend and DevOps capabilities."
        ],
    },
    {
        title: "Bachelor of Engineering",
        institution_name: "Sri Shakthi Institute of Engineering and Technology",
        icon: college,
        iconBg: "#accbe1",
        date: "Oct 2021 - Present",
        points: [
            "Working on various academic projects involving frontend development, database management, and data structures.",
            "Actively participating in technical workshops and coding competitions",
            "Maintaining a strong academic record with a CGPA of 9.2.",
        ],
    },
    {
        title: "Higher Secondary Education - 12th Grade",
        institution_name: "National Model",
        icon: school,
        iconBg: "#fbc3bc",
        date: "June 2019 - July 2020",
        points: [
            "Specialized in Mathematics, Physics, Chemistry and Computer Science",
            "Achieved 92.5% in the 12th grade final exams.",
            "Developed a strong foundation in problem-solving and analytical thinking through various school projects and assignments.",
            "Participated in school-level science exhibitions.",
        ],
    },
    {
        title: "Secondary Education - 10th Grade",
        institution_name: "National Model",
        icon: school,
        iconBg: "#b7e4c7",
        date: "June 2018 - May 2019",
        points: [
            "Completed foundational studies in all core subjects including Mathematics, Science, and Social Studies.",
            "Achieved 97.8% in the 10th grade final exams.",
            "Participated in school-level extracurricular activities, including debates and quizzes.",
        ],
    }
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Dummk0pf',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/prames-maanikam/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'XO',
        description: 'This is a console-based game of Tic-Tac-Toe written in Java, I have implemented a new algorithm called priority fill instead of the usual approach..',
        link: 'https://github.com/Dummk0pf/XO',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Dream Ride',
        description: 'Developed a monolith console-based vehicle rental system using Java and MySQL DB, considering various use cases from the admin and borrower point of view.',
        link: 'https://github.com/Dummk0pf/Dream-Ride',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Share Code',
        description: 'This is a script project that I use to send my code as a link in online gdb to people via WhatsApp, I have used batch scripts and Powershell scripts in this project.',
        link: 'https://github.com/Dummk0pf/Share-Code',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Smart Gloves for the Mute',
        description: 'Filed a patent for smart gloves designed to help mute individuals communicate through hand motions, tracked by Arduino and converted into pre-recorded voice messages.',
        link: 'https://github.com/SarikaRamamoorthy/SmartGloves',
        applicationNo : '202441037439',
    }
];