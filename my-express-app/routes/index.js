var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET table page. */
router.get('/table', function(req, res, next) {
  // Sample data for the table
  const terms = [
    { id: 1, term: 'Devops', description: 'Devops decreases the so-called “wall of confusion” between software development and operations. This involves multiple processes and or practices such as integration, monitoring and automation that will contribute to a cohesive solution. ', references: '“What is the ultimate goal of DevOps?,” BrowserStack. https://www.browserstack.com/guide/what-is-the-ultimate-goal-of-devops#:~:text=The%20ultimate%20goal%20of%20DevOps%20is%20to%20be%20able%20to (accessed Jul. 26, 2023).'},
    { id: 2, term: 'Continuous Integration (CI)', description: 'The integration of code that could be from multiple contributors into a single project. This allows multiple and regular updates to a project from various sources that can carry out automated tests and builds. ', references: '“What is Continuous Integration: Testing, Software & Process Tutorial,” CloudBees. https://www.cloudbees.com/continuous-delivery/continuous-integration\n' +
          '‌\n' +
          'Redhat, “What is CI/CD?,” Redhat.com, 2019. https://www.redhat.com/en/topics/devops/what-is-ci-cd\n'},
    { id: 3, term: 'Continuous Deployment (CD)', description: 'Where Software changes to an application or platform are deployed automatically into a production environment. This is possible through predefined tests, and automated processes the software has to pass in order to be pushed successfully.', references: 'Atlassian, “Continuous integration vs. continuous delivery vs. continuous deployment,” Atlassian, 2019. https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment\n' +
          '\n' +
          '“Continuous Deployment: An Essential Guide | IBM,” www.ibm.com. https://www.ibm.com/topics/continuous-deployment\n'},
    { id: 4, term: 'Containers', description: 'In the context of devops, containers are a kind of package that collects software together with all of its dependencies. The goal is to isolate applications from the underlying infrastructure, which allows for smooth deployments and efficient management of components. ', references: '“What are Containers in DevOps? Benefits, Use Cases,” www.knowledgehut.com. https://www.knowledgehut.com/blog/devops/devops-containers (accessed Jul. 26, 2023).\n' +
          '‌\n' +
          '“What Are Containers and Containerization in DevOps?,” Papertrail. https://www.papertrail.com/solution/tips/what-are-containers-and-containerization-in-devops/#:~:text=Containerization%20is%20a%20process%20of (accessed Jul. 26, 2023).\n'},
    { id: 5, term: 'Scalability', description: 'When a software application takes on more users or processes there can be a strain on the resources. Scalability refers to the ability to adapt resources based on usage that will in effect maintain performance and responsiveness as needed. ', references: '“The Scalability of DevOps - Flosum DevOps,” www.flosum.com. https://www.flosum.com/blog/the-scalability-of-devops (accessed Jul. 26, 2023).\n' +
          '‌\n' +
          '“What is scalability in cloud computing?,” www.pluralsight.com. https://www.pluralsight.com/resources/blog/cloud/scalability-cloud-computing\n'},
    { id: 6, term: 'Orchestration', description: 'Enables the setup of technical processes that will assist in software or infrastructure being more reliable and predictable. It can automate tests, application setup, monitoring and any initial complex task into efficient workflows. ', references: '“What is Orchestration?,” Databricks, Oct. 06, 2021. https://www.databricks.com/glossary/orchestration#:~:text=DevOps%20orchestration%20is%20the%20coordination (accessed Jul. 26, 2023).\n' +
          '‌\n' +
          '\n' +
          '“Automation and Orchestration: 6 Reasons Why to Invest in DevOps Orchestration,” Testsigma Blog, Sep. 15, 2022. https://testsigma.com/blog/devops-orchestration/ (accessed Jul. 26, 2023).\n'},
    { id: 7, term: 'SLA (service level agreement)', description: 'Service level agreement in outlines the agreement between the service creator or provider to the user or client. In the technical context this can include any metrics of effectiveness the provider has stated to give such as details of the service, when it is provided by, the uptime, and the length that it will be provided. ', references: '“Definition of Service-Level Agreement (SLA) - Gartner Information Technology Glossary,” Gartner. https://www.gartner.com/en/information-technology/glossary/sla-service-level-agreement\n' +
          '‌\n' +
          '“IT Service Level Agreement: Definition & Sample,” www.contractscounsel.com. https://www.contractscounsel.com/t/us/it-service-level-agreement\n'},
    { id: 8, term: 'Blue-green deployment', description: 'Two identical environments however users are only directed to one at a time. While they are directed to green, new changes can be made to code in blue without affecting green. Once tests have been completed and successful the user can be pointed to the new updated environment. ', references: '“What is blue green deployment?,” www.redhat.com. https://www.redhat.com/en/topics/devops/what-is-blue-green-deployment\n' +
          '‌\n' +
          '“What Is Blue/Green Deployment?,” Codefresh. https://codefresh.io/learn/software-deployment/what-is-blue-green-deployment/\n' +
          '‌\n'},
    { id: 9, term: 'High Availability (HA)', description: 'High availability creates a low risk of failure by allowing an application/service to operate continuously even when one of its components fails. This can be done through a set of hosts or back ups, elimination of single points of failure and efficient failure detection. ', references: '“What Is High Availability?,” Cisco. https://www.cisco.com/c/en/us/solutions/hybrid-work/what-is-high-availability.html#:~:text=High%20availability%20means%20that%20an (accessed Jul. 26, 2023).\n' +
          '‌\n' +
          '\n' +
          '\n' +
          '“What is High Availability? Definition & FAQs,” Avi Networks. https://avinetworks.com/glossary/high-availability/\n' +
          '‌\n'},
    { id: 10, term: 'Load balancing', description: 'Allows for the distribution of processes across multiple servers. This allows for a spreading of work that then improves availability and responsiveness. ', references: '“Load Balancing 101 - Learn All About Load Balancers,” Avi Networks, 2017. https://avinetworks.com/what-is-load-balancing/\n' +
          '‌\n' +
          '“What is load balancing? - Definition from WhatIs.com,” SearchNetworking. https://www.techtarget.com/searchnetworking/definition/load-balancing\n'},
  ];

  res.render('table', { terms: terms });
});

module.exports = router;
