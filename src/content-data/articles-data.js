// content-data/articles-data.js
const articles = [
    {
      id: 1,
      title: "Human Rights Situation Deteriorates in Rural Eritrea",
      slug: "human-rights-situation-deteriorates",
      author: "Daniel Tekle",
      date: "March 6, 2025",
      category: "Human Rights",
      importance: "High", // Will appear in Featured section
      excerpt: "Recent reports from rural areas indicate increasing restrictions on movement and expression as government control tightens.",
      thumbnail: "/images/radiofree.jpg",
      content: [
        { type: "h1", content: "Human Rights Situation Deteriorates in Rural Eritrea" },
        { type: "image", src: "/images/radiofree.jpg", alt: "Religious gathering" },
        { type: "p", content: "Recent interviews with refugees and internal sources paint a troubling picture of increasing restrictions in rural parts of Eritrea, particularly affecting farming communities and religious minorities." },
        { type: "p", content: "According to multiple independent sources, government checkpoints have multiplied on roads connecting villages, making it increasingly difficult for citizens to travel freely between communities without extensive documentation and questioning." },
        { type: "h2", content: "Religious Freedom Concerns" },
        { type: "p", content: "Members of unauthorized religious groups report heightened surveillance and intimidation tactics. Several community leaders have allegedly been detained for organizing private prayer gatherings." },
        { type: "p", content: "International human rights organizations continue to express concern over the treatment of religious minorities, with particular focus on the detention of practitioners without formal charges or legal representation." },
        { type: "h2", content: "Agricultural Impact" },
        { type: "p", content: "The restrictions are also affecting agricultural production, as farmers face challenges accessing their lands when they cross administrative boundaries. Several farmers reported having to abandon portions of their productive land due to mounting administrative barriers." },
        { type: "p", content: "\"We can no longer tend to our fields across the river without risking detention or extensive questioning,\" said one farmer who wished to remain anonymous for safety reasons." }
      ]
    },
    {
      id: 2,
      title: "Eritrea's Dangerous Gambit in the Horn of Africa",
      slug: "eritreas-dangerous-gambit",
      author: "Daniel Mekonnen",
      date: "March 7, 2025",
      category: "Politics",
      importance: "Low", // Will appear in Featured section
      excerpt: "Analysis suggests Eritrea is pursuing a high-risk strategy by cultivating relationships with Ethiopian rebel groups, potentially threatening regional stability.",
      thumbnail: "/images/eritrea-ethiopia-border.jpg",
      content: [
        { type: "h1", content: "Eritrea's Dangerous Gambit in the Horn of Africa" },
        { type: "p", content: "Intelligence reports indicate Eritrea may be pursuing a perilous strategy by attempting to forge alliances with multiple Ethiopian insurgent groups, including the Tigray People's Liberation Front (TPLF), Fano fighters, the Oromo Liberation Army (OLA), and the Ogaden National Liberation Front (ONLF)." },
        { type: "image", src: "/images/asmara-palace.jpg", alt: "Presidential Palace in Asmara, Eritrea" },
        { type: "h2", content: "A Strategy Rooted in Regional Rivalry" },
        { type: "p", content: "Security analysts suggest President Isaias Afwerki, who has ruled Eritrea for three decades, may be calculating that a fragmented Ethiopia would enhance Eritrea's relative position in the Horn of Africa. This approach appears to be driven by longstanding regional competition rather than immediate border disputes." },
        { type: "p", content: "\"At 79, President Afwerki's foreign policy continues to be shaped by historical grievances and a vision of Eritrean regional influence that dates back to the independence struggle,\" notes regional expert Amanuel Tesfay. \"However, this strategy fails to account for Eritrea's significant domestic challenges.\"" },
        { type: "h2", content: "Economic Realities Undermine Strategic Ambitions" },
        { type: "p", content: "Eritrea's economy remains in a precarious state, with severe shortages of basic necessities, including reliable electricity and food security. International isolation has further compounded these difficulties, raising questions about the country's capacity to sustain any meaningful regional intervention." },
        { type: "p", content: "The country continues to suffer from one of the world's highest emigration rates, with thousands of young Eritreans fleeing mandatory national service that can extend indefinitely." },
        { type: "h2", content: "Ethiopia's Potential Response" },
        { type: "p", content: "Ethiopia, under Prime Minister Abiy Ahmed, has demonstrated both military capability and resolve during recent internal conflicts. Experts suggest any confirmed Eritrean support for Ethiopian insurgents would likely trigger a severe diplomatic and potentially military response." },
        { type: "p", content: "\"Ethiopia possesses significant conventional military advantages and international diplomatic support that would make any proxy confrontation extremely costly for Eritrea,\" explains defense analyst Tekle Abebe. \"The Ethiopian government has consistently signaled zero tolerance for external interference in its internal affairs.\"" }
      ]
    },

    {
      id: 3,
      title: "Isaias Afwerki: The Master of Stirring Regional Conflict",
      slug: "isaias-afwerki-regional-conflict",
      author: "Solomon Berhe",
      date: "March 7, 2025",
      category: "Politics",
      importance: "None", // Will appear in Featured section
      excerpt: "An in-depth examination of President Isaias Afwerki's three-decade strategy of supporting various militant groups across East Africa and its impact on regional stability.",
      thumbnail: "/images/afwerki-portrait.jpg",
      content: [
        { type: "h1", content: "Isaias Afwerki: The Master of Stirring Regional Conflict" },
        { type: "p", content: "For 33 years, since declaring himself President of Eritrea following the country's independence, Isaias Afwerki has methodically transformed the nation into what regional security experts describe as the epicenter of destabilization efforts across the Horn of Africa. Intelligence reports, diplomatic cables, and testimony from former militants paint a comprehensive picture of Eritrea's role as a sanctuary and support base for numerous insurgent and militant organizations." },
        { type: "image", src: "/images/eritrea-military-training.jpg", alt: "Military training camp in Eritrea" },
        { type: "h2", content: "Ethiopia: The Primary Target" },
        { type: "p", content: "Ethiopia has consistently remained the focal point of Eritrea's proxy strategy, with President Afwerki maintaining simultaneous relationships with multiple competing insurgent groups. According to classified intelligence assessments, Eritrea has provided material support, training facilities, and diplomatic backing to the Oromo Liberation Front (OLF) and its military wing, the Oromo Liberation Army (OLA), organizations that have conducted numerous operations in Ethiopia's Oromia region." },
        { type: "p", content: "\"Eritrea's support for these groups has evolved from basic sanctuary to comprehensive military training and strategic guidance,\" explains former Ethiopian intelligence officer Addisu Mengistu. \"Camps located near Teseney and in remote areas of Gash-Barka have served as training grounds for Ethiopian militants for decades, with Eritrean military officers providing expertise in guerrilla tactics.\"" },
        { type: "p", content: "Perhaps most significantly, evidence suggests that even during periods of apparent rapprochement with Ethiopia, Eritrea maintained ties with the Tigray People's Liberation Front (TPLF), the Ogaden National Liberation Front (ONLF), and more recently, the amorphous Fano militants operating in the Amhara region. This strategy of maintaining relationships with competing factions has allowed President Afwerki to quickly pivot his support as regional dynamics shift." },
        { type: "h2", content: "Beyond Ethiopia: A Web of Regional Influence" },
        { type: "p", content: "Eritrea's involvement extends well beyond Ethiopia's borders. In Sudan, multiple independent investigations have documented Eritrean support for the Sudan People's Liberation Movement/Army (SPLM/A) during the Sudanese civil war, the Justice and Equality Movement (JEM), Sudan Liberation Movement/Army (SLM/A), and most recently, evidence points to connections with the Rapid Support Forces (RSF) during the ongoing Sudanese conflict." },
        { type: "p", content: "\"President Afwerki has mastered the art of playing all sides,\" notes Dr. Fatima Ibrahim, a Sudanese conflict researcher at the Institute for Security Studies. \"During different phases of Sudan's complex conflicts, Eritrea has simultaneously maintained relationships with opposing factions, allowing Asmara to exert influence regardless of which group gains the upper hand.\"" },
        { type: "p", content: "Eritrean influence similarly extends to Djibouti, where connections to the Front for the Restoration of Unity and Democracy (FRUD) and its armed wing have been documented by United Nations monitoring groups. In Somalia, multiple administrations have accused Eritrea of providing support to Al-Shabaab, the Islamic Courts Union (ICU), and various other militant factions, allegations that led to UN sanctions against Eritrea between 2009 and 2018." },
        { type: "h2", content: "A Strategic Pattern" },
        { type: "p", content: "Security analysts identify several consistent patterns in Eritrea's approach to supporting these groups. Initial contact typically begins with offering sanctuary to exiled leadership, followed by the establishment of training facilities, provision of military equipment, and diplomatic advocacy in regional forums." },
        { type: "p", content: "\"The training programs are particularly sophisticated,\" explains a former member of the Oromo Liberation Army who requested anonymity. \"Eritrean military instructors provide comprehensive courses in guerrilla warfare tactics, improvised explosive device construction, and intelligence collection techniques. These aren't simple safe havens—they're professional military academies for insurgents.\"" },
        { type: "p", content: "Evidence suggests that Eritrean military officers often serve as embedded advisors with allied militant groups, providing tactical guidance during operations while maintaining Asmara's official denial of involvement." },
        { type: "h2", content: "Domestic Conditions Enable External Focus" },
        { type: "p", content: "President Afwerki's ability to maintain this decades-long strategy stems partly from Eritrea's domestic political structure. With no parliament, constitution, independent judiciary, or free press, the president faces no institutional constraints on foreign policy decisions." },
        { type: "p", content: "\"The lack of any domestic accountability mechanism allows President Afwerki to allocate state resources toward these external operations without oversight,\" notes Eritrean governance expert Daniel Solomon. \"The indefinite national service program provides a continuous supply of military personnel that can be dedicated to training and supporting allied groups.\"" },
        { type: "p", content: "Despite Eritrea's limited economic resources, the government has consistently prioritized military capabilities and relationships with armed groups over domestic development, contributing to the country's position near the bottom of global development indices." },
        { type: "h2", content: "International Response" },
        { type: "p", content: "The international community has struggled to develop effective countermeasures to Eritrea's strategy. United Nations sanctions imposed between 2009 and 2018 specifically targeted Eritrea's support for Al-Shabaab and other Somali armed groups, but had limited effect on the broader pattern of support for regional militants." },
        { type: "p", content: "\"The challenge for international actors is that Eritrea has mastered the art of proxy warfare while maintaining plausible deniability,\" explains Dr. Helena Mebrahtu, an international relations professor specializing in Horn of Africa security dynamics. \"Direct material evidence of support is often difficult to document to the standard required for international action.\"" },
        { type: "p", content: "Recent diplomatic initiatives have attempted to integrate Eritrea into regional security frameworks, including the lifting of UN sanctions in 2018, but intelligence assessments suggest these efforts have not fundamentally altered President Afwerki's strategic approach." },
        { type: "h2", content: "The Future Trajectory" },
        { type: "p", content: "At 79, questions about succession loom large over Eritrea's future. President Afwerki has systematically eliminated potential rivals within the government and military, leaving no clear successor. Security analysts warn that the extensive networks established with militant groups across the region could become even more volatile during any eventual transition of power." },
        { type: "p", content: "\"The relationships President Afwerki has cultivated with armed groups represent a form of institutional knowledge that may not transfer smoothly to any successor,\" cautions former UN special envoy to the Horn of Africa, James Morithi. \"There's a real risk that these connections could fragment during a transition, creating even greater unpredictability in the region.\"" },
        { type: "p", content: "For now, Eritrea's role as what one diplomatic cable described as the \"master stirrer of regional conflict\" continues unabated, with intelligence reports indicating ongoing relationships with multiple armed groups across five countries in East Africa. As Ethiopia, Sudan, and Somalia navigate their own complex political transitions, the shadow of Eritrean influence remains a consistent factor in regional destabilization efforts." }
      ]
    },

    {
      id: 4,
      title: "The Silent Crisis: Eritrea's Ongoing Struggle for Basic Freedoms",
      slug: "eritrea-silent-crisis-freedoms",
      author: "Senait Yohannes",
      date: "March 7, 2025",
      category: "Human Rights",
      importance: "None", // Will appear in Featured section
      excerpt: "Decades after independence, Eritreans continue to face severe restrictions on fundamental liberties while the international community remains largely silent.",
      thumbnail: "/images/eritrea-street-scene.jpg",
      content: [
        { type: "h1", content: "The Silent Crisis: Eritrea's Ongoing Struggle for Basic Freedoms" },
        { type: "p", content: "More than three decades after achieving independence, Eritrea remains one of the world's most repressive states, with citizens facing extraordinary restrictions on nearly every aspect of daily life. Human rights monitors have consistently ranked the country among the least free nations globally, yet the situation receives minimal international attention compared to other humanitarian crises." },
        { type: "image", src: "/images/eritrea-youth-protest.jpg", alt: "Eritrean diaspora youth protesting for freedom" },
        { type: "h2", content: "A System of Total Control" },
        { type: "p", content: "Eritrea's governance structure has evolved into what experts describe as one of the world's most comprehensive systems of social and political control. The absence of independent media, functioning civil society organizations, religious freedom, or any form of political opposition has created an environment where the state maintains near-total dominance over citizens' lives." },
        { type: "p", content: "\"What makes Eritrea unique is not just the presence of repression, but its totality,\" explains former Eritrean judge Dawit Mehari, who fled the country in 2014. \"From the moment of birth until death, every significant life decision - education, employment, marriage, travel - requires permission from the state. This level of micromanagement of citizens' lives is unprecedented in modern history.\"" },
        { type: "h2", content: "The Indefinite National Service" },
        { type: "p", content: "At the center of Eritrea's repressive system is the mandatory national service program, which has effectively conscripted much of the adult population into indefinite service. Originally established as an 18-month program, the service has been extended indefinitely for many citizens, who serve in military or civilian capacities with minimal compensation and no clear timeline for release." },
        { type: "p", content: "\"National service has become a euphemism for state-sponsored forced labor,\" notes human rights researcher Elena Habtemariam. \"Young Eritreans are assigned to positions regardless of their qualifications or preferences, often separated from their families for years or decades, and paid wages insufficient for basic survival.\"" },
        { type: "p", content: "This system has contributed directly to Eritrea having one of the world's highest emigration rates, with thousands of citizens risking dangerous desert and Mediterranean crossings each year despite the government's shoot-to-kill policy at borders and the criminalization of unauthorized departure." },
        { type: "h2", content: "Religious Persecution" },
        { type: "p", content: "Religious freedom has been particularly curtailed, with only four officially recognized faiths - Orthodox Christianity, Sunni Islam, Catholic Christianity, and Lutheran Protestantism - permitted to operate under strict government oversight. Members of unauthorized religious groups, including Pentecostal and Evangelical Christians, Jehovah's Witnesses, and others face severe consequences for practicing their faith." },
        { type: "p", content: "\"Hundreds of Eritreans remain in detention solely for their religious beliefs, often in secret facilities without formal charges or access to legal representation,\" explains former prisoner of conscience Abraham Tekle. \"Some have been detained for more than twenty years simply for refusing to renounce their faith.\"" },
        { type: "p", content: "Even within recognized religious institutions, the government maintains tight control, appointing leaders and restricting activities that might challenge state authority." },
        { type: "h2", content: "Constitutional Void" },
        { type: "p", content: "The absence of a functioning constitution has created a legal vacuum in which arbitrary detention, disappearances, and extrajudicial punishment have become normalized. Though a constitution was drafted in 1997, it has never been implemented, leaving Eritrea in a permanent state of emergency rule." },
        { type: "p", content: "\"Without constitutional protections or an independent judiciary, there is simply no mechanism for citizens to challenge government actions or seek redress for abuses,\" explains legal scholar Rahwa Solomon. \"The president and security apparatus operate with complete impunity, with no institutional checks on their authority.\"" },
        { type: "p", content: "Multiple generations have now grown up in this constitutional void, creating a society where the concept of legal rights exists only in theory." },
        { type: "h2", content: "Information Blackout" },
        { type: "p", content: "Eritrea maintains one of the world's most restrictive information environments, with no independent media permitted to operate within the country. The state controls all broadcast and print outlets, internet access is severely limited, and foreign journalists are rarely granted access." },
        { type: "p", content: "\"The information monopoly serves multiple purposes,\" explains media freedom advocate Samuel Berhane. \"It prevents Eritreans from organizing, shields the government from accountability, and allows the regime to control the narrative about conditions within the country.\"" },
        { type: "p", content: "Recent modest increases in internet availability have been accompanied by enhanced surveillance capabilities, with citizens aware that online communications are monitored by security services." },
        { type: "h2", content: "The Path Forward" },
        { type: "p", content: "Despite these challenges, Eritreans both inside the country and throughout the extensive diaspora continue to advocate for fundamental freedoms. Underground networks share information about conditions within the country, while diaspora organizations document abuses and pressure international bodies to address the situation." },
        { type: "p", content: "\"What Eritreans are demanding isn't extraordinary - it's the bare minimum of human dignity,\" emphasizes activist Helen Yosief. \"The right to speak freely, practice one's faith, choose one's occupation, move about freely, and live without fear of arbitrary detention - these aren't radical concepts, they're basic human rights recognized everywhere else.\"" },
        { type: "p", content: "For meaningful change to occur, experts suggest international engagement must move beyond periodic expressions of concern to sustained diplomatic and economic pressure. The normalization of relations with Eritrea without substantial human rights improvements, they argue, only reinforces the status quo." },
        { type: "p", content: "\"Freedom in Eritrea isn't just a matter of political reform - it's about restoring the fundamental dignity that has been systematically stripped from an entire population,\" concludes former political prisoner Haile Woldeab. \"After three decades of independence, Eritreans are still waiting for the promise of that hard-won freedom to be fulfilled.\"" }
      ]
    },

    {
      id: 5,
      title: "Voices from the Silence: Eritreans Speak Out for Freedom Despite Risks",
      slug: "eritrea-voices-freedom-risks",
      author: "Yonas Mesfin",
      date: "March 7, 2025",
      category: "Human Rights",
      importance: "None", // Will appear in Featured section
      excerpt: "Despite severe repression, Eritreans continue to fight for basic liberties through creative resistance, underground networks, and global advocacy.",
      thumbnail: "/images/eritrea-diaspora-protest.jpg",
      content: [
        { type: "h1", content: "Voices from the Silence: Eritreans Speak Out for Freedom Despite Risks" },
        { type: "p", content: "In one of the world's most closed societies, where even private conversations can lead to disappearance, Eritreans continue to find creative ways to advocate for fundamental freedoms. Through coded language, underground networks, diaspora activism, and increasingly, digital platforms, citizens are challenging a system designed to eliminate all forms of independent expression." },
        { type: "image", src: "/images/eritrea-cafe-scene.jpg", alt: "Young Eritreans at a cafe in Asmara" },
        { type: "h2", content: "A Generation That Has Never Known Freedom" },
        { type: "p", content: "For Eritreans under 30, who constitute the majority of the population, the concept of basic freedoms exists only in theory. Born after independence and raised under President Isaias Afwerki's increasingly authoritarian rule, this generation has never experienced free elections, independent media, or unrestricted assembly." },
        { type: "p", content: "\"We were taught in school about how our parents fought for thirty years to liberate Eritrea,\" shares a 26-year-old former teacher who recently fled to Ethiopia. \"But the freedom they fought for never materialized for us. We've only known a system of control, surveillance, and fear.\"" },
        { type: "p", content: "Despite this reality, young Eritreans continue to seek information about democratic governance and human rights, often through clandestine means. Shared USB drives containing downloaded articles, VPN software to access blocked websites, and coded conversations have become common methods of circumventing the information blockade." },
        { type: "h2", content: "Creative Forms of Resistance" },
        { type: "p", content: "In the absence of traditional avenues for political expression, Eritreans have developed nuanced forms of resistance that avoid direct confrontation with authorities. Literary metaphors, musical allusions, and visual art have become vehicles for expressing dissent while maintaining plausible deniability." },
        { type: "p", content: "\"Art has always been a refuge for people living under repression,\" explains cultural historian Semhar Tesfazghi. \"In contemporary Eritrean poetry and music, you'll find complex layers of meaning - references to 'the long night,' 'the waiting season,' or 'the promised dawn' that everyone understands as criticisms of the current situation, but which cannot be directly censored without acknowledging their political content.\"" },
        { type: "p", content: "These creative expressions often spread through word of mouth, with particularly resonant poems or songs memorized and shared in private settings where monitoring is less prevalent." },
        { type: "h2", content: "The Price of Speaking Out" },
        { type: "p", content: "For those who choose more direct forms of dissent, the consequences remain severe. Eritrea continues to detain thousands of political prisoners, many held incommunicado in a network of formal and informal detention facilities across the country. Some have been held for decades without charge or trial." },
        { type: "p", content: "\"My brother asked a simple question during a community meeting about when conscripts would be released from national service,\" recalls Maria, now living in Sweden. \"Two days later, security agents came to our home and took him. That was in 2006. We've had no official confirmation of his whereabouts since then, though former detainees who've escaped the country have reported seeing him at Era-Ero prison.\"" },
        { type: "p", content: "Human rights organizations have documented patterns of torture, forced disappearances, and extrajudicial executions targeting those perceived as criticizing the government, contributing to Eritrea's reputation as one of the world's worst human rights abusers." },
        { type: "h2", content: "Diaspora as Advocates" },
        { type: "p", content: "With domestic advocacy severely restricted, much of the visible work for Eritrean freedom has shifted to the global diaspora. Estimated at over two million people - nearly half the country's domestic population - the Eritrean diaspora has established advocacy organizations, documentation centers, and media platforms focusing on human rights and democratic governance." },
        { type: "p", content: "\"Those of us who managed to escape have a responsibility to speak for those who cannot,\" explains Haile Mengisteab, director of Eritrean Human Rights Watch, a diaspora-led monitoring organization. \"We work to document abuses, support refugees, and ensure that the international community doesn't forget about Eritrea just because it's difficult to access.\"" },
        { type: "p", content: "These efforts face significant challenges, including surveillance of diaspora communities by government agents, pressure on family members still in Eritrea, and the 2% income tax the Eritrean government demands from citizens living abroad, often using coercive measures to ensure compliance." },
        { type: "h2", content: "Digital Resistance" },
        { type: "p", content: "Despite Eritrea's position near the bottom of global internet penetration rankings, digital platforms have emerged as increasingly important vectors for sharing information and organizing advocacy efforts. Satellite phones, encrypted messaging apps, and social media platforms accessed through VPNs provide channels for communication between Eritreans inside the country and the global diaspora." },
        { type: "p", content: "\"The government can control traditional infrastructure, but complete digital isolation is becoming harder to maintain,\" notes technology researcher Dawit Hagos. \"Even with limited connectivity, information now flows in both directions, breaking down the isolation that has been central to maintaining control.\"" },
        { type: "p", content: "Recent years have seen coordinated online campaigns bringing attention to specific human rights concerns, including the detention of journalists, religious persecution, and the indefinite national service system, generating increased international attention to these long-standing issues." },
        { type: "h2", content: "International Engagement" },
        { type: "p", content: "Human rights advocates argue that meaningful improvement in Eritrea's freedom situation requires consistent, principled international engagement. Critics note that recent regional diplomatic initiatives have often prioritized security cooperation and migration control over human rights concerns, inadvertently reinforcing the status quo." },
        { type: "p", content: "\"There's a dangerous tendency to accept Eritrea's exceptionalism - to suggest that standard human rights norms somehow don't apply,\" cautions diplomat-turned-advocate Sophia Tesfamariam. \"The international community must be clear that improved relations depend on concrete human rights improvements, not just security cooperation.\"" },
        { type: "p", content: "Specific benchmarks proposed by advocacy organizations include releasing political prisoners, implementing the constitution, establishing term limits, permitting independent media, and reforming the national service system to comply with international labor standards." },
        { type: "h2", content: "The Universal Desire for Freedom" },
        { type: "p", content: "Despite decades of repression, the fundamental desire for freedom remains resilient among Eritreans both inside the country and throughout the diaspora. Interviews with recent refugees consistently highlight aspirations not for material prosperity, but for basic liberties taken for granted elsewhere." },
        { type: "p", content: "\"When I speak with newly arrived Eritrean refugees, they don't primarily talk about economic opportunities,\" notes refugee counselor Teklemariam Gebrehiwot. \"They talk about the simple freedom to speak without looking over their shoulder, to practice their faith openly, to choose their own path in life without government permission, to know where their loved ones are detained and why.\"" },
        { type: "p", content: "This persistent desire for fundamental freedoms challenges narratives suggesting that Eritreans are somehow culturally predisposed to accept authoritarian governance. Multiple surveys of Eritrean refugees and diaspora communities show overwhelming support for democratic reforms, religious freedom, and rule of law." },
        { type: "p", content: "\"Freedom isn't a Western concept being imposed on Eritrea - it's a universal human aspiration that Eritreans have been denied far too long,\" emphasizes human rights lawyer Eden Tesfaldet. \"Eritreans fought for three decades for independence precisely because they wanted freedom. The current system represents not the fulfillment of that struggle, but its betrayal.\"" },
        { type: "p", content: "As the country approaches its fourth decade of independence, the question remains whether this generation will finally experience the freedoms that animated the long struggle for Eritrean sovereignty - or whether the patterns of repression will continue into the next generation." }
      ]
    },

  ];
  
  export default articles;