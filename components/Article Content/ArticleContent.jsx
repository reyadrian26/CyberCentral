import React from "react";
import { Header, Container, Grid, Segment } from "semantic-ui-react";
import styles from '../../styles/ArticleContent.module.scss';
import article1img from "../../assets/article1-img.webp";
import article2img from "../../assets/article2img.jpg";
import article3img from "../../assets/article3img.jpg";
import article4img from "../../assets/article4img.png";
import article5img from "../../assets/article5img.jpeg";
import article6img from "../../assets/article6img.png";
import article7img from "../../assets/article7img.webp";
import article8img from "../../assets/article8img.png";
import article9img from "../../assets/article9img.jpg";
import author1 from "../../assets/User Icons/author1.png";
import author2 from "../../assets/User Icons/author2.png";
import author3 from "../../assets/User Icons/author3.png";
import author4 from "../../assets/User Icons/author4.png";
import author5 from "../../assets/User Icons/author5.png";
import author6 from "../../assets/User Icons/author6.png";
import author7 from "../../assets/User Icons/author7.png";
import author8 from "../../assets/User Icons/author8.png";
import author9 from "../../assets/User Icons/author9.png";
import Image from 'next/image'; 

const articleData = [
  {
    "id": 0,
    "title": "Unveiling the Future: Artificial Intelligence in Everyday Life",
    "author": "Emily Chen",
    "profile": author1,
    "date": "March 22, 2024",
    "image": article1img,
    "text": `In recent years, the realm of artificial intelligence (AI) has transitioned from science fiction to everyday reality, permeating various facets of our lives. From personalized recommendations on streaming platforms to advanced medical diagnostics, AI is reshaping industries and revolutionizing the way we live, work, and interact with technology. 
    At the heart of AI's transformative power lies its ability to analyze vast amounts of data and extract meaningful insights. Machine learning algorithms, a subset of AI, enable systems to learn from experience and improve over time without explicit programming. This capability underpins many AI applications, allowing them to adapt to changing environments and perform tasks that were once reserved for humans.
    One area where AI has made significant strides is healthcare. Advanced algorithms can now assist clinicians in diagnosing diseases, predicting patient outcomes, and even recommending personalized treatment plans. For instance, researchers have developed AI models capable of analyzing medical images to detect cancerous lesions with a level of accuracy comparable to experienced radiologists. By augmenting human expertise, AI has the potential to enhance patient care, reduce diagnostic errors, and alleviate the burden on healthcare providers.
    In addition to healthcare, AI is also revolutionizing industries such as finance, manufacturing, and transportation. In finance, algorithmic trading platforms leverage AI to analyze market trends and execute trades with split-second precision, optimizing investment strategies and maximizing returns for investors. Meanwhile, in manufacturing, AI-powered robots are streamlining production processes, increasing efficiency, and ensuring product quality. Autonomous vehicles, equipped with AI-driven perception systems, are poised to transform transportation by improving safety, reducing congestion, and providing mobility options for individuals with disabilities.
    Beyond its commercial applications, AI is also playing a pivotal role in addressing some of society's most pressing challenges. For example, in the field of environmental science, researchers are harnessing AI to analyze climate data, model complex systems, and develop strategies for mitigating the impacts of climate change. Similarly, AI-powered disaster response systems can help emergency responders coordinate relief efforts, allocate resources efficiently, and minimize casualties during natural disasters.
    However, alongside its myriad benefits, the widespread adoption of AI also raises ethical, legal, and societal concerns. Issues such as data privacy, algorithmic bias, and job displacement require careful consideration to ensure that AI technologies are developed and deployed responsibly. Moreover, there is a pressing need to address the digital divide and ensure equitable access to AI-driven innovations, particularly in underserved communities.
    As we navigate the opportunities and challenges presented by AI, it is imperative to adopt a human-centered approach that prioritizes transparency, accountability, and inclusivity. By harnessing the transformative power of AI while safeguarding ethical principles and promoting social good, we can unlock its full potential to create a brighter, more equitable future for all.
    In conclusion, artificial intelligence is poised to revolutionize virtually every aspect of our lives, from healthcare and finance to transportation and environmental sustainability. By harnessing its transformative power responsibly, we can leverage AI to address some of humanity's most pressing challenges and usher in a new era of innovation and progress.`,
  },
  {
    "id": 1,
    "title": "The Rise of Virtual Reality: Shaping the Future of Technology",
    "author": "Sarah Thompson",
    "profile": author2,
    "date": "March 24, 2024",
    "image": article2img,
    "text": `Virtual reality (VR) technology has emerged as one of the most promising advancements in the field of technology. What was once considered a futuristic concept depicted in science fiction movies has now become a tangible reality, with VR headsets becoming increasingly accessible to consumers worldwide.
    One of the primary drivers behind the rise of virtual reality is its widespread application across various industries. In the gaming sector, VR technology has revolutionized the gaming experience by providing players with immersive environments and interactive gameplay. From realistic simulations to captivating storytelling, VR games offer a level of engagement that traditional gaming platforms cannot match.
    Beyond gaming, virtual reality has found its way into fields such as healthcare, education, and training. In healthcare, VR simulations are being used to train medical professionals, allowing them to practice complex surgical procedures in a risk-free environment. Similarly, educators are leveraging VR technology to create interactive learning experiences that enhance student engagement and comprehension.
    Moreover, virtual reality has the potential to reshape the way we socialize and communicate. With VR social platforms, users can interact with others in virtual environments, attending events, exploring new places, and collaborating on projects—all from the comfort of their homes. As VR technology continues to evolve, it is poised to redefine the concept of social interaction in the digital age.
    However, despite its rapid advancements, virtual reality still faces challenges such as hardware limitations, motion sickness, and content development. As technology companies invest in research and development to address these challenges, the potential of VR technology remains vast and untapped.
    In conclusion, the rise of virtual reality represents a paradigm shift in the world of technology, offering boundless opportunities for innovation and growth. As VR continues to permeate various aspects of our lives, it is clear that we are only beginning to scratch the surface of its transformative potential.`,
  },
  {
    "id": 2,
    "title": "The Future of Renewable Energy: Innovations and Challenges",
    "author": "Maria Rodriguez",
    "profile": author3,
    "date": "March 22, 2024",
    "image": article3img,
    "text": `The world has witnessed a significant shift towards renewable energy sources as a sustainable alternative to traditional fossil fuels. This transition has been driven by a growing awareness of the environmental impact of conventional energy sources, as well as advancements in technology that have made renewable energy more accessible and cost-effective.
    One of the most promising innovations in renewable energy is the rapid development of solar photovoltaic (PV) technology. Solar panels, which convert sunlight into electricity, have become increasingly efficient and affordable, making solar power a viable option for both residential and commercial applications. In addition to traditional silicon-based solar cells, researchers are exploring new materials and designs, such as perovskite solar cells, that promise even greater efficiency and lower production costs.
    Another area of focus in renewable energy research is wind power. Wind turbines have long been used to generate electricity, but recent advancements in turbine design and construction have significantly increased their efficiency and reliability. Offshore wind farms, in particular, have emerged as a major source of renewable energy, harnessing the strong and consistent winds found at sea to produce clean electricity.
    In addition to solar and wind power, other renewable energy sources such as hydroelectricity, biomass, and geothermal energy are also playing an important role in the transition to a sustainable energy future. Advances in energy storage technology, such as batteries and pumped hydro storage, are addressing the intermittent nature of renewable energy sources and enabling greater integration into existing power grids.
    Despite the progress being made in the field of renewable energy, significant challenges remain. One of the main obstacles is the need for continued investment in research and development to drive down costs and improve efficiency. Policy and regulatory frameworks also play a crucial role in incentivizing the adoption of renewable energy technologies and phasing out fossil fuel subsidies.
    In conclusion, the future of renewable energy is bright, with innovative technologies and ambitious goals driving the transition towards a cleaner, more sustainable energy system. By investing in renewable energy infrastructure and embracing new technologies, we can reduce our dependence on fossil fuels, mitigate climate change, and create a more resilient and equitable energy future for generations to come.`,
  },
  {
    "id": 3,
    "title": "The Role of Blockchain in Supply Chain Management",
    "author": "Daniel Johnson",
    "profile": author4,
    "date": "March 15, 2024",
    "image": article4img,
    "text": `Blockchain technology, originally developed as the underlying technology for cryptocurrencies like Bitcoin, has emerged as a powerful tool for transforming supply chain management. By providing a decentralized and immutable ledger of transactions, blockchain offers numerous benefits for enhancing transparency, traceability, and efficiency across the supply chain.
    One of the key advantages of blockchain in supply chain management is its ability to create a transparent and tamper-proof record of transactions. Each transaction is recorded as a block on the blockchain, linked to previous blocks in a chain, and encrypted for security. This ensures that every participant in the supply chain has access to the same information, reducing the risk of fraud, errors, and discrepancies.
    Blockchain also enables greater traceability of products throughout the supply chain. By recording the movement of goods from the point of origin to the final destination, companies can track the journey of products in real-time and verify their authenticity and provenance. This is particularly valuable in industries such as food and pharmaceuticals, where safety and quality are paramount and regulatory compliance is essential.
    Moreover, blockchain technology can streamline supply chain processes by automating key tasks and reducing the need for intermediaries. Smart contracts, which are self-executing contracts with the terms of the agreement directly written into code, can automate tasks such as payment processing, inventory management, and contract enforcement, thereby reducing delays, errors, and costs.
    In addition to improving transparency and efficiency, blockchain has the potential to foster greater collaboration and trust among supply chain partners. By sharing a common ledger of transactions, companies can establish a single source of truth and eliminate the need for costly and time-consuming reconciliations. This can lead to more efficient decision-making, faster dispute resolution, and stronger relationships between suppliers, manufacturers, distributors, and customers.
    Despite its potential benefits, the adoption of blockchain technology in supply chain management is still in its early stages. Challenges such as scalability, interoperability, and regulatory uncertainty remain obstacles to widespread implementation. However, as companies continue to explore and experiment with blockchain solutions, the technology is poised to revolutionize the way we manage and optimize supply chains in the digital age.`,
  },
  {
    "id": 4,
    "title": "Cybersecurity Trends for 2024: Protecting Against Emerging Threats",
    "author": "Erwin Smith",
    "profile": author5,
    "date": "January 14, 2024",
    "image": article5img,
    "text": `As technology continues to evolve at a rapid pace, so too do the tactics and techniques employed by cybercriminals. With each passing year, organizations face increasingly sophisticated cyber threats that challenge their ability to safeguard sensitive data and maintain the integrity of their digital infrastructure. As we embark on the journey through 2024, it is crucial for businesses and individuals alike to stay abreast of the latest cybersecurity trends and proactively defend against emerging threats.
    One of the most prominent trends in cybersecurity for 2024 is the rise of ransomware attacks targeting critical infrastructure and supply chain networks. Over the past few years, ransomware has evolved from a nuisance targeting individual users to a formidable weapon wielded by sophisticated cybercriminal syndicates. These attacks often involve the encryption of sensitive data or the disruption of essential services, with attackers demanding hefty ransoms for decryption keys or the restoration of services.
    To combat this growing threat, organizations must prioritize robust cybersecurity measures, including regular data backups, network segmentation, and employee training programs to raise awareness about the dangers of phishing attacks and other common ransomware vectors. Additionally, implementing advanced endpoint detection and response (EDR) solutions can help organizations detect and mitigate ransomware threats before they can inflict irreparable damage.
    Another cybersecurity trend to watch in 2024 is the proliferation of artificial intelligence (AI)-powered cyber attacks. As AI and machine learning technologies become increasingly accessible, cybercriminals are leveraging these tools to automate and enhance their attack capabilities. AI-driven malware can evade traditional security defenses by adapting in real-time and masquerading as legitimate traffic, making it challenging for organizations to detect and mitigate these threats effectively.
    To counter AI-powered cyber attacks, organizations must deploy AI-driven security solutions capable of detecting anomalous behavior and identifying emerging threats in real-time. By leveraging AI and machine learning algorithms to analyze vast amounts of data and identify patterns indicative of malicious activity, organizations can bolster their defenses and stay one step ahead of cybercriminals.
    Furthermore, as the Internet of Things (IoT) ecosystem continues to expand, securing interconnected devices against cyber threats poses a significant challenge for organizations across industries. IoT devices, ranging from smart home appliances to industrial control systems, often lack robust security features, making them vulnerable to exploitation by malicious actors.
    To mitigate the risks associated with IoT devices, organizations should implement comprehensive security protocols, including device authentication mechanisms, encryption protocols, and regular firmware updates. Additionally, deploying network segmentation strategies can help isolate IoT devices from critical assets and minimize the potential impact of a security breach.
    In conclusion, as we navigate the ever-changing landscape of cybersecurity in 2024, organizations must remain vigilant and proactive in defending against emerging threats. By staying abreast of the latest cybersecurity trends and adopting a multi-layered approach to security, organizations can strengthen their defenses and protect against the evolving tactics of cybercriminals. By prioritizing cybersecurity as a core component of their operations, businesses can safeguard sensitive data, preserve customer trust, and maintain a competitive edge in an increasingly digital world.`,
  },
  {
    "id": 5,
    "title": "The Internet of Things: Connecting Devices for a Smarter World",
    "author": "Samantha Lee",
    "profile": author6,
    "date": "February 18, 2024",
    "image": article6img,
    "text": `In the not-so-distant past, the concept of a connected world, where everyday objects communicate with each other seamlessly, was confined to the realm of science fiction. However, with the advent of the Internet of Things (IoT), this vision has become a reality, ushering in an era of unprecedented connectivity and convenience. From smart homes and cities to industrial automation and healthcare, the IoT is revolutionizing the way we live, work, and interact with technology.
    At its core, the Internet of Things refers to the network of interconnected devices embedded with sensors, software, and other technologies that enable them to collect and exchange data. These devices, ranging from smartphones and wearable gadgets to household appliances and industrial machinery, communicate with each other and with centralized systems, creating a vast ecosystem of connected objects.
    One of the most significant benefits of the IoT is its potential to improve efficiency and streamline processes across various industries. In the manufacturing sector, for example, IoT-enabled sensors can monitor equipment performance in real-time, detect anomalies, and schedule predictive maintenance, reducing downtime and optimizing productivity. Similarly, in agriculture, IoT devices can collect data on soil moisture levels, temperature, and crop health, enabling farmers to make informed decisions and optimize resource allocation for maximum yield.
    In addition to enhancing efficiency, the IoT is also driving innovation in consumer technology, giving rise to the concept of the smart home. Smart home devices, such as thermostats, lighting systems, and security cameras, can be controlled remotely via smartphone apps or voice commands, offering homeowners greater convenience, comfort, and security. Moreover, by integrating these devices into a centralized ecosystem, users can create personalized automation routines that adjust settings based on their preferences and daily routines.
    Furthermore, the IoT has the potential to transform urban environments into smart cities, where interconnected infrastructure and intelligent systems enhance quality of life and sustainability. Smart city initiatives leverage IoT technologies to optimize traffic flow, manage energy consumption, and improve public safety through the deployment of smart sensors, traffic cameras, and environmental monitoring systems. By harnessing data-driven insights, city planners can make evidence-based decisions and create more resilient, livable communities for residents.
    However, the proliferation of IoT devices also presents unique challenges related to security, privacy, and interoperability. As the number of connected devices continues to grow, so too does the potential attack surface for cyber threats and vulnerabilities. Malicious actors may exploit insecure IoT devices to gain unauthorized access to sensitive data or launch large-scale distributed denial-of-service (DDoS) attacks, disrupting critical services and infrastructure.
    To address these challenges, stakeholders must prioritize cybersecurity by implementing robust encryption protocols, authentication mechanisms, and secure firmware updates to protect IoT devices from exploitation. Additionally, fostering collaboration among industry stakeholders and establishing standards for interoperability can ensure that IoT devices from different manufacturers can communicate and work together seamlessly, enhancing usability and scalability.
    In conclusion, the Internet of Things holds immense potential to transform our world by connecting devices, gathering data, and enabling intelligent decision-making across industries and sectors. By leveraging IoT technologies responsibly and addressing security and privacy concerns proactively, we can harness the power of connectivity to create a smarter, more efficient, and sustainable future for generations to come.`,
  },
  {
    "id": 6,
    "title": "Space Exploration Technology: Pushing the Boundaries of Discovery",
    "author": "David Rodriguez",
    "profile": author7,
    "date": "March 5, 2024",
    "image": article7img,
    "text": `Humanity's quest to explore the cosmos has long been fueled by curiosity, innovation, and the relentless pursuit of knowledge. Over the decades, advancements in space exploration technology have enabled us to push the boundaries of discovery, uncovering the mysteries of the universe and expanding our understanding of our place within it. As we stand on the precipice of a new era of space exploration, propelled by cutting-edge technologies and ambitious goals, it is worth reflecting on the remarkable achievements and groundbreaking discoveries that have brought us to this momentous juncture.
    One of the most significant developments in space exploration technology in recent years has been the emergence of reusable rocket systems. Traditionally, space missions relied on expendable launch vehicles, which were discarded after a single use, resulting in exorbitant costs and limited access to space. However, with the advent of reusable rocket technology pioneered by companies like SpaceX, the economics of space travel have been fundamentally transformed.
    Reusable rockets, such as SpaceX's Falcon 9 and Falcon Heavy, are designed to return to Earth and land safely after delivering their payloads into orbit. This revolutionary approach not only significantly reduces the cost of launching payloads into space but also opens up new possibilities for rapid and frequent access to space. By reusing rockets multiple times, space agencies and commercial entities can conduct more missions at a fraction of the cost, accelerating scientific research, satellite deployment, and even the prospect of human space exploration.
    Furthermore, advancements in propulsion technology have enabled spacecraft to travel farther and faster than ever before, expanding the horizons of human exploration. Breakthroughs in ion propulsion, nuclear propulsion, and solar sails promise to revolutionize interplanetary travel, enabling spacecraft to reach distant destinations such as Mars, Jupiter, and beyond with unprecedented speed and efficiency. These technologies hold the key to unlocking the next chapter in humanity's exploration of the cosmos, paving the way for ambitious missions to explore other planets, moons, and celestial bodies in our solar system and beyond.
    Moreover, the convergence of space exploration technology with artificial intelligence (AI) and robotics is transforming the way we explore and study the universe. Autonomous rovers and landers equipped with AI algorithms can navigate challenging terrain, conduct scientific experiments, and collect valuable data in remote and inhospitable environments. For example, NASA's Perseverance rover, equipped with advanced AI capabilities, is exploring the surface of Mars, searching for signs of ancient life and laying the groundwork for future human missions to the Red Planet.
    In addition to robotic exploration, space agencies and private companies are increasingly turning their attention to the development of space habitats and infrastructure to support long-duration human spaceflight and colonization efforts. Projects such as NASA's Lunar Gateway and SpaceX's Starship represent ambitious endeavors to establish sustainable outposts in space, laying the foundation for a permanent human presence beyond Earth's orbit.
    As we look to the future, the possibilities for space exploration technology are boundless. From the prospect of mining asteroids for precious resources to the search for habitable exoplanets orbiting distant stars, humanity stands on the cusp of unprecedented discoveries and achievements in the realm of space exploration. By harnessing the power of innovation, collaboration, and determination, we can continue to push the boundaries of discovery, unlocking the mysteries of the cosmos and inspiring future generations to reach for the stars.`,
  },
  {
    "id": 7,
    title: "E-commerce Innovations: Redefining the Future of Online Shopping",
    author: "Rachel Thompson",
    profile: author8,
    date: "December 15 2023",
    image: article8img,
    text: `The landscape of retail has undergone a seismic shift in recent years, with the rapid proliferation of e-commerce platforms transforming the way consumers shop and businesses operate. From the convenience of online marketplaces to the personalized shopping experiences enabled by artificial intelligence, e-commerce innovations are reshaping the future of retail and redefining the way we buy and sell goods and services.
    One of the most significant trends in e-commerce is the integration of augmented reality (AR) and virtual reality (VR) technologies to enhance the online shopping experience. AR and VR applications allow consumers to visualize products in real-world environments or immersive virtual spaces, enabling them to make more informed purchasing decisions. For example, furniture retailers can offer AR apps that allow customers to see how a sofa or coffee table would look in their living room before making a purchase, reducing the likelihood of returns and increasing customer satisfaction.
    Moreover, advancements in artificial intelligence (AI) and machine learning are revolutionizing e-commerce by enabling personalized recommendations, predictive analytics, and chatbot-driven customer service. AI algorithms analyze vast amounts of data, including past purchase history, browsing behavior, and social media interactions, to deliver tailored product recommendations and marketing messages to individual consumers. Chatbots, powered by natural language processing (NLP) technology, provide instant assistance and support to shoppers, answering questions, resolving issues, and facilitating transactions in real-time.
    Furthermore, the rise of mobile commerce (m-commerce) has accelerated the growth of e-commerce by enabling consumers to shop anytime, anywhere, using their smartphones or tablets. Mobile shopping apps offer seamless browsing, one-click purchasing, and secure payment options, making it easier than ever for consumers to discover, compare, and buy products on the go. As a result, businesses are increasingly investing in mobile-first strategies to optimize the shopping experience for smartphone users and capitalize on the growing trend of mobile commerce.
    Additionally, the emergence of blockchain technology is poised to revolutionize e-commerce by enhancing transparency, security, and trust in online transactions. Blockchain-based platforms offer decentralized marketplaces where buyers and sellers can transact directly without the need for intermediaries, reducing fees and eliminating the risk of fraud. Moreover, blockchain enables immutable record-keeping and secure authentication, ensuring the integrity of supply chains and protecting against counterfeit goods.
    Furthermore, the COVID-19 pandemic has accelerated the adoption of contactless payment methods and digital wallets, further fueling the growth of e-commerce. As consumers seek safer and more convenient ways to shop amid social distancing measures, businesses are increasingly offering contactless payment options such as mobile wallets, QR codes, and digital currencies. These developments not only enhance the safety and convenience of online shopping but also pave the way for the widespread adoption of digital payments in the post-pandemic world.
    In conclusion, e-commerce innovations are revolutionizing the retail industry, offering consumers unprecedented convenience, personalization, and flexibility in their shopping experiences. From augmented reality and artificial intelligence to mobile commerce and blockchain technology, the future of online shopping is bright with possibilities. By embracing these advancements and staying ahead of the curve, businesses can position themselves for success in the ever-evolving world of e-commerce.`,
  },
  {
    "id": 8,
    "title": "Big Data Analytics: Leveraging Insights for Business Success",
    "author": "Michael Lee",
    "profile": author9,
    "date": "January 21, 2024",
    "image": article9img,
    "text": `In today's digital age, the volume of data generated by businesses and consumers alike is growing at an exponential rate. This influx of data, often referred to as "big data," presents both challenges and opportunities for organizations across industries. However, with the right tools and strategies, businesses can leverage big data analytics to extract valuable insights, drive informed decision-making, and gain a competitive edge in the marketplace.
    At its core, big data analytics involves the process of collecting, processing, and analyzing large and complex datasets to uncover patterns, trends, and correlations that can inform business strategies and drive performance improvements. By harnessing the power of advanced analytics techniques, such as machine learning, data mining, and predictive modeling, organizations can unlock hidden insights buried within their data and gain a deeper understanding of their customers, operations, and market dynamics.
    One of the key benefits of big data analytics is its ability to enhance customer understanding and personalization. By analyzing vast amounts of customer data, including demographics, purchase history, and online behavior, businesses can segment their customer base more effectively and tailor their products, services, and marketing campaigns to meet the unique needs and preferences of individual customers. This personalized approach not only enhances customer satisfaction and loyalty but also drives revenue growth and competitive differentiation.
    Moreover, big data analytics can help businesses optimize their operations and streamline processes to improve efficiency and reduce costs. By analyzing data from various sources, such as supply chain transactions, manufacturing processes, and customer feedback, organizations can identify bottlenecks, inefficiencies, and opportunities for optimization. For example, predictive maintenance analytics can help organizations anticipate equipment failures and schedule maintenance proactively, minimizing downtime and maximizing productivity.
    Furthermore, big data analytics can enable organizations to gain valuable insights into market trends, competitor behavior, and emerging opportunities, empowering them to make informed decisions and stay ahead of the competition. By analyzing external data sources, such as social media conversations, news articles, and economic indicators, businesses can gain a holistic view of the market landscape and identify potential risks and opportunities early on. This proactive approach to data-driven decision-making can help organizations mitigate risks, capitalize on market trends, and drive sustainable growth.
    However, realizing the full potential of big data analytics requires more than just advanced technology; it also requires a strategic approach to data management and governance. Organizations must invest in robust data infrastructure, including data storage, processing, and integration capabilities, to ensure that they can manage and analyze large volumes of data effectively. Additionally, organizations must establish clear data governance policies and procedures to ensure data quality, security, and compliance with regulatory requirements.
    In conclusion, big data analytics has the power to transform businesses by unlocking valuable insights, driving informed decision-making, and fueling innovation and growth. By harnessing the power of big data analytics, organizations can gain a competitive edge in the marketplace, enhance customer satisfaction, optimize operations, and capitalize on emerging opportunities. As data continues to proliferate and evolve, businesses that embrace a data-driven culture and invest in advanced analytics capabilities will be well-positioned to thrive in the digital economy.`,
  },
];

export { articleData };

const ArticleContent = ({ articleId }) => {
  const article = articleData[articleId]; 

  const paragraphs = article.text
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <Segment className={styles.articleContent} id="articleContent">
      <Header as="h1" className={styles.articleHeader}>
        {article.title}
      </Header>

      <Container className={styles.authorContainer}>
        <Grid columns={2} className={styles.authorDetails}>
          <Grid.Row className={styles.row}>
            <Grid.Column width={2} className={styles.authorLeft}>
              <Image
                src={article.profile}
                size="small"
                circular
                className={styles.authorImage}
              />
            </Grid.Column>
            <Grid.Column width={12} className={styles.authorRight}>
              <Segment className={styles.authorDetails}>
                <p className={styles.pAuthor}>{article.author}</p>
                <span className={styles.gray}>
                  <p className="p p-date">{article.date}</p>
                </span>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Segment className={styles.imageContainer}>
        <Image src={article.image} fluid className={styles.articleImage} />
      </Segment>

      <Container className={styles.articleText}>{paragraphs}</Container>
    </Segment>
  );
};

export default ArticleContent;
