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
    { id: 11, term: 'Bootstrapping', description: 'In the context of devops, bootstrapping refers to the initial setup and configuration of all the tools and processes needed in a devops workflow. This could mean setting up version control systems, configuring build pipelines and the establishment of monitoring channels. ', references: 'A. Zenuni, “Bootstrapping DevOps automation: How to accelerate your SRE journey with DevOps automation best practices,” Dynatrace news, Oct. 10, 2022. https://www.dynatrace.com/news/blog/bootstrapping-devops-automation-best-practices/ (accessed Aug. 13, 2023).\n' +
          '\n' +
          '“Bootstrapping a devops mentality | Skills Matter Meetup,” Bootstrapping a devops mentality | Skills Matter Meetup. https://skillsmatter.com/meetups/878-bootstrapping-a-devops-mentality (accessed Aug. 13, 2023).'},
    { id: 12, term: 'microservice', description: 'A microservice is an architectural approach in which a larger application is split into subsections or a breakdown of smaller services. In Devops, using microservices can assist in the efficiency of deployment and assist with scalability. ', references: 'S. Wickramasinghe, “The Role of Microservices in DevOps,” BMC Blogs. https://www.bmc.com/blogs/devops-microservices (accessed Aug. 13, 2023).'},
    { id: 13, term: 'registry', description: 'This refers to a centralised repository where certain kinds of artefacts are stored. Examples of this could be docker images, libraries or any assets associated with the project at hand. This is useful for automation purposes and version control of certain artefacts. ', references: '“What is a container registry?,” www.redhat.com. https://www.redhat.com/en/topics/cloud-native-apps/what-is-a-container-registry\n' +
          '\n' +
          '“DevOps through container registry,” devmio - Software Know-How, Aug. 01, 2020. https://devm.io/devops/container-registry-devops-165819 (accessed Aug. 13, 2023).\n'},
    { id: 14, term: 'docker', description: 'Docker is a platform that assists in creating and running applications in an isolated container. Within this container holds all the necessary dependencies for applications and simplifies the deployment process. This allows runtime environments to be consistent and as simple as necessary. ', references: '“What is Docker in DevOps? How Does it Work? Tutorial Guide For Beginners - Gyansetu,” Sep. 19, 2022. https://www.gyansetu.in/blogs/what-is-docker-in-devops-how-does-it-work/ (accessed Aug. 13, 2023).\n' +
          '\n' +
          '“The Role of Docker in DevOps,” DEV Community. https://dev.to/kodekloud/the-role-of-docker-in-devops-1con\n'},
    { id: 15, term: 'kubernetes', description: 'Kubernetes is a container orchestration platform that can assist in automating many areas of deployment, scaling and management of containerised applications. It is able to abstract the underlying infrastructure, and focuses on how the applications run, their availability, load balancing and many infrastructure variations. ', references: 'H. Najafi, “DevOps responsibilities and roles in a Kubernetes environment,” Medium, Apr. 06, 2021. https://homernajafi.medium.com/devops-responsibilities-and-roles-in-a-kubernetes-environment-8cbc4d604ef5 (accessed Aug. 13, 2023).\n' +
          '\n' +
          'MirantisIT, “What is Kubernetes? | Why use Kubernetes & More,” Mirantis. https://www.mirantis.com/cloud-native-concepts/getting-started-with-kubernetes/what-is-kubernetes/\n'},
    { id: 16, term: 'SRE (site reliability engineering)', description: 'Site reliability engineering refers to the blending of software engineering with operations with the goal of improving reliability and performance. Site reliability engineers focus on automation, monitoring and any approach that assists in efficiency and availability of services.', references: '“DevOps vs SRE: Major Differences,” www.knowledgehut.com. https://www.knowledgehut.com/blog/devops/devops-vs-sre (accessed Aug. 13, 2023).\n' +
          '‌\n' +
          '“What is SRE?,” www.redhat.com. https://www.redhat.com/en/topics/devops/what-is-sre\n'},
    { id: 17, term: 'ansible', description: 'Ansible is an automation tool that helps with the orchestration of infrastructure and application deployment. This orchestration is completed through a set of YAML instructions. It is one of the most simple automation tools as the tasks are written in a very human-readable format. ', references: '“What is Ansible?,” Opensource.com. https://opensource.com/resources/what-ansible'},
    { id: 18, term: 'terraform', description: 'Terraform is a language that can be used to write infrastructure through code (IaC). It can be used for various cloud providers to create and modify as needed. Terraform holds a state at any time to keep track of all configurations and resources to help manage all infrastructure. ', references: '“What is Terraform: Everything You Need to Know | Varonis,” www.varonis.com. https://www.varonis.com/blog/what-is-terraform\n' +
          '\n' +
          '“State | Terraform | HashiCorp Developer,” State | Terraform | HashiCorp Developer. https://developer.hashicorp.com/terraform/language/state/purpose (accessed Aug. 13, 2023).\n'},
    { id: 19, term: 'git', description: 'Git is a version control system that assists developers to keep track of their code and its changes. It enables larger teams of developers to work concurrently in the same code base and have multiple branches with new features or fixes. ', references: '“What is Git: Features, Command and Workflow in Git,” Simplilearn.com. https://www.simplilearn.com/tutorials/git-tutorial/what-is-git\n' +
          '\n' +
          '“What Is Git & Why Should You Use It? | Noble Desktop Blog | Tutorials, Resources, Tips & Tricks,” www.nobledesktop.com. https://www.nobledesktop.com/blog/what-is-git-and-why-should-you-use-it\n'},
    { id: 20, term: 'Incident management', description: 'Incident management within DevOps involves detecting, responding and resolving any disruptive or outlier behaviours to an applications performance or functionality. These could include service outages or security breaches. In devops automated incident detection and response processes are in place to provide more resilient systems. ', references: 'Atlassian, “Incident management in the age of DevOps,” Atlassian. https://www.atlassian.com/incident-management/devops (accessed Aug. 13, 2023).\n' +
          '\n' +
          'J. Kernel, “DevOps Incident Management: A Guide With Best Practices,” XPLG Turn Data Into Action | Log Data Insights, Jan. 28, 2020. https://www.xplg.com/devops-incident-management-best-practices/ (accessed Aug. 13, 2023).\n'},
    { id: 21, term: 'Version Control System', description: 'Version control systems are tools used to track changes to files or applications over time. Over time it assists in recalling past versions later. If issues come up in later and the version needed to revert having this version control system would assist in this. \n', references: 'Atlassian, “What is version control,” Atlassian, 2019. https://www.atlassian.com/git/tutorials/what-is-version-control\n' +
          '‌\n' +
          'Git, “Git - About Version Control,” Git-scm.com, 2019. https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control\n'},
    { id: 22, term: 'Immutable Infrastructure', description: 'This refers to any infrastructure such as servers or Vms that aren’t amended after deployment. Where updates needed to be made new images or infrastructure is used to replace rather than just amending the current. ', references: '“What is Immutable Infrastructure? Best Practices with Examples,” Cloud Infrastructure Services, May 03, 2022. https://cloudinfrastructureservices.co.uk/what-is-immutable-infrastructure-best-practices/\n' +
          '\n' +
          'HashiCorp, “Immutable Infrastructure: Benefits, Comparisons & More,” HashiCorp. https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure\n'},
    { id: 23, term: 'Configuration Management', description: 'Configuration management involves any technical or administrative activities that assist in the maintenance and control of applications. It often assists in the system performance and control of changes over time. ', references: 'APM, “What is configuration management? | APM,” www.apm.org.uk, Sep. 13, 2019. https://www.apm.org.uk/resources/what-is-project-management/what-is-configuration-management/\n' +
          '‌\n' +
          'RedHat, “What is configuration management,” www.redhat.com, Jul. 11, 2019. https://www.redhat.com/en/topics/automation/what-is-configuration-management\n'},
    { id: 24, term: 'Deployment Pipeline', description: 'An automated process to quickly move any new updates of an application into production. It allows for new changes to be run, tested and deployed in a uniform and reliable way. ', references: '“What is a Deployment Pipeline?,” PagerDuty. https://www.pagerduty.com/resources/learn/what-is-a-deployment-pipeline/#:~:text=In%20software%20development%2C%20a%20deployment\n' +
          '‌\n' +
          '“What is a Pipeline in Software Engineering? Intro to Deployment, CI, & CD Pipelines,” BMC Blogs, 2018. https://www.bmc.com/blogs/deployment-pipeline/\n'},
    { id: 25, term: 'Infrastructure as a Service (IaaS)', description: 'Infrastructure as a service is the organisation of infrastructure in the cloud that offers compute, storage and networking resources. It can be useful for maintenance and minimising costs. It also assists in the flexibility and scalability of services. ', references: '“What is IaaS? Infrastructure as a Service | Microsoft Azure,” azure.microsoft.com. https://azure.microsoft.com/en-ca/resources/cloud-computing-dictionary/what-is-iaas#:~:text=Infrastructure%20as%20a%20service%20(IaaS (accessed Sep. 02, 2023).\n' +
          '\n' +
          '“Definition of Infrastructure as a Service (IaaS) - Gartner Information Technology Glossary,” Gartner. https://www.gartner.com/en/information-technology/glossary/infrastructure-as-a-service-iaas\n'},
    { id: 26, term: 'Versioning', description: 'Versioning refers to identifying certain identifiers or numbers and tags to track changes in applications systematically. This helps teams in managing different versions of code and configurations to grow and improve in their work. \n', references: '“What is versioning and how does it work?,” Software Quality. https://www.techtarget.com/searchsoftwarequality/definition/versioning#:~:text=In%20software%20development%2C%20versioning%20allows\n' +
          '\n' +
          'mijacobs, “What is version control? - Azure DevOps,” learn.microsoft.com. https://learn.microsoft.com/en-us/devops/develop/git/what-is-version-control\n'},
    { id: 27, term: 'Distributed Tracing', description: 'It is a method for monitoring and troubleshooting complex microservice-based applications. It is useful for tracking the flow of requests in different services, as well as insights into the performance or issues in a distributed system. ', references: '“What is distributed tracing? Definition from SearchITOperations,” IT Operations. https://www.techtarget.com/searchitoperations/definition/distributed-tracing (accessed Sep. 02, 2023).\n' +
          '‌\n' +
          '“What Is Distributed Tracing? An Introduction,” Splunk. https://www.splunk.com/en_us/data-insider/what-is-distributed-tracing.html\n' +
          '‌\n'},
    { id: 28, term: 'Chaos Engineering', description: 'Chaos engineering deliberately pushes failures and disruptions into a system to test its resilience. This increases understanding in a systems vulnerabilities to proactively uncover and protect from weaknesses. ', references: '“What is Chaos Engineering?(examples,pros & cons),” www.knowledgehut.com. https://www.knowledgehut.com/blog/devops/chaos-engineering\n' +
          '‌S. Gunja, “What is chaos engineering?,” Dynatrace news, Oct. 28, 2021. https://www.dynatrace.com/news/blog/what-is-chaos-engineering/\n'},
    { id: 29, term: 'Configuration Drift', description: 'This is where inconsistencies lie between the actual configuration of a system and its expected configuration. Usually this is caused when changes have been made manually and somewhere in the process have not properly been implemented. Contradictions are therefore in the system and can lead to an unstable environment. ', references: '“Configuration Drift: Why It’s Bad and How to Eliminate It,” Aqua. https://www.aquasec.com/cloud-native-academy/vulnerability-management/configuration-drift/#:~:text=Configuration%20drift%20is%20when%20the%20configuration%20of%20an%20environment%20%E2%80%9Cdrifts\n' +
          '‌\n' +
          'N. Yash, “A Guide to Configuration Drift and How to Prevent it,” Geekflare, Aug. 26, 2022. https://geekflare.com/guide-to-configuration-drift/ (accessed Sep. 02, 2023).\n' +
          '‌\n'},
    { id: 30, term: 'Infrastructure Automation', description: 'A selection of automated processes that handle repeated tasks in relation to setting up and managing infrastructure services. This allows for the reduction of manual task configuration in these infrastructure setups. It also reduces human intervention and ensures more consistent services. ', references: '“What is infrastructure automation?,” www.redhat.com. https://www.redhat.com/en/topics/automation/what-is-infrastructure-automation\n' +
          '‌\n' +
          'S. Sengupta, “IT Infrastructure Automation: A Beginner’s Guide,” BMC Blogs. https://www.bmc.com/blogs/it-infrastructure-automation/\n'},

  ];

  res.render('table', { terms: terms });
});

module.exports = router;
