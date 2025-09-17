// utils/data/blogs-data.js

// Import certificate images
import javaImage from "../../app/assets/svg/certificates/java.png";
import ciscoImage from "../../app/assets/svg/certificates/cisco.png";
import udemyImage from "../../app/assets/svg/certificates/udemy.png";
import indusImage from "../../app/assets/svg/certificates/indus.png";
import miaImage from "../../app/assets/svg/certificates/mia.png";

export const certificates = [
    {
        title: "Java SE 17 Developer",
        issuer: "Oracle",
        date: "Feb 2025",
        description:
            "Oracle Certified Professional: Java SE 17 Developer demonstrates proficiency in Java SE 17 development, recognized worldwide for software excellence.",
        image: javaImage,
        url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5A878E705CC6F97E87EA1077D4F079D39560E55CFCC28A088F24258F4BA4D3F7",
    },
    {
        title: "Mastering Java + Spring Boot: REST APIs and Microservices",
        issuer: "Udemy",
        date: "Apr 2025",
        description:
            "Course completion certificate demonstrating hands-on expertise in building RESTful APIs and microservices with Java and Spring Boot.",
        image: udemyImage,
        url: "https://www.udemy.com/certificate/UC-247287c3-72a5-4be5-9f05-8aaf379234a2/",
    },
    {
        title: "CCNA: Introduction to Networks",
        issuer: "CISCO",
        date: "June 2024",
        description:
            "Cisco Certified Network Associate (CCNA) covering networking fundamentals, IP connectivity, network access, and security basics.",
        image: ciscoImage,
        url: "https://www.credly.com/badges/ca4c2b9e-a3a7-4fa1-8a5f-657c1d8ba8c7",
    },
];

export const Awards = [
    {
        title: "1st Place: IDEATHON 1.0",
        issuer: "Club Indus",
        date: "Apr 2025",
        description: "Hackathon for solving industrial challenges, organized by Club Indus ENSAO.",
        image: indusImage,
        url: "",
    },
    {
        title: "2nd Place (25,000 DH) MIATHON 2.0 UMP and CRO",
        issuer: "MIA",
        date: "July 2024",
        description: "Hackathon for solving societal challenges, organized by MIA.",
        image: miaImage,
        url: "",
    },
];
