<script>
  import Figure from "$lib/components/figure.svelte";
</script>

# Grant

- **Development of Industry-Specific Physical AI Foundation Models and Cultivation of Next-Generation Convergence Talent (산업 특화 Physical AI 파운데이션 모델 개발 및 차세대 융합형 인재양성)**, _Institute of Information & Communications Technology Planning & Evaluation (IITP, 정보통신기획평가원) — consortium led by Lotte Innovate_, _2026.04.01–2029.12.31 (Phase 1 through 2027.12.31) (PI of the Yonsei University subproject, carried out jointly with two other research groups at Yonsei)_
- **광 컴퓨팅 연산기 지원 딥러닝 컴파일러 설계 및 프로토타입 개발**, _위탁과제(ETRI)_, _2025.03.01~~2025.05.31 (참여 연구원) / 2025.06.01~~2026.12.31 (PI)_
- **A Flexible and Scalable Modular Development and Verification Methodology for Distributed Systems Based on Compositional Consensus Algorithms (통합 합의 알고리즘 기반 분산 시스템을 위한 유연하고 확장 가능한 모듈화 개발 및 검증 방법론)**, _Outstanding Young Scientist Grant / National Research Foundation (우수신진연구/한국연구재단)_, _2025.03.01~2027.02.28_ (PI)
- **A Fundamental Technology for Modular Neural Network Verification (신경망 분해/통합 검증을 위한 원천 기술 연구)**, _삼성미래기술육성재단_, _2023.12.01~2026.11.30_ (PI)
- **Formal approaches to achieve accuracy of quantized neural network**, _Korea Model Optimization Program, Google Korea_, _2023.09.22~2024.09.21_ (PI)

# Research Interest

- Reliability in system software (시스템 소프트웨어 신뢰성 — distributed system, blockchain, hypervisor, operating systems, computational storage)
- Reliability in neural network (신경망 신뢰성 — framework & model reliability)
- Formal verification (정형 검증)
- Programming language design & theory (프로그래밍 언어 설계 및 이론)
- Software engineering (소프트웨어 공학)
- Formal verification automation (정형 검증 자동화)
- Formal verification theories and tools (정형 검증 이론 및 도구)
- SE for AI (Neural network modularization, data integrity check)
- AI for SE (proof auto generation, LLM assisted transaction system)

# Research Vision

Trustworthy Edge Collaboration Infrastructure for the Future Computing Environment. In the coming computing environment, countless edge devices — humanoid robots, autonomous mobility, drones and logistics robots, smart factories, healthcare — are connected and act directly in the physical world. — 로봇 · 모빌리티 · 인프라가 연결되어 물리 세계에서 함께 살아가는 미래 컴퓨팅 환경의 신뢰 가능한 Edge 협업 인프라를 연구합니다

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Edge devices — robots, mobility and infrastructure — collaborating over a trustworthy edge infrastructure"
/>

In this shift, the role of edge devices changes fundamentally. They are no longer simple terminals that relay information to a central server — they now perceive, decide, and physically act, learning and executing directly in the field. For such a system to be safe, trustworthy, and correct, we must guarantee the integrity of execution and provide safe recovery from faults. My lab (FCAI Lab) tackles this end-to-end through four challenges. — 이 변화 속에서 Edge Device의 역할도 근본적으로 달라집니다: 정보를 전달하던 단순 단말을 넘어, 현장에서 스스로 지각·판단·행동하는 실행 주체가 됩니다.

## Challenge 1: Safe Data Collection (안전한 데이터 수집)

When many edge devices learn from real-time streams, can we filter malicious poisoning before it is absorbed into the model? Since poison, once learned, is hard to undo, clean data must be preserved while poison is blocked pre-emptively.

## Challenge 2: Efficient Model Decomposition & Deployment (효율적 모델 분할 · 배포)

Not every device needs the full network. Can we cut out only the required functionality (classes) and deploy it while preserving the original model's decisions? We treat decomposability as a property that demands both semantic preservation and structural separation.

## Challenge 3: Trustworthy Collaboration (신뢰할 수 있는 협업)

Agents whose number and type change constantly must coordinate through transactions while preserving authority and data security — unlike closed servers or blockchains. Long-running, asynchronous, loosely-coupled workflows need flexible transaction patterns (Saga) with security policy baked in and formally verified.

## Challenge 4: Complete Program Proof (완벽한 프로그램 증명)

These protocols ultimately become implementation code — often spanning several languages — and change often; in this domain even tiny defects are catastrophic. Formal verification is the only way to mathematically guarantee correctness, but it is extremely costly (seL4 took ~11 years). We attack this on two fronts: a multi-language verification framework and automated proof generation to remove the biggest bottleneck.

**Our lab researches this entire pipeline end-to-end.**

<p lang="ko"><strong>우리 연구실은 이 전체 파이프라인을 엔드투엔드로 연구하고 있습니다.</strong></p>

# Background, Foundational and Past Work

## Formal verification (정형 검증)

We are working with multiple methods to build software security and reliability, such as **fuzzing**, **program synthesis**, and so on. However, one of the strongest ways that we are using to fully guarantee software assurance is "**formal verification**". In this sense, several our projects are related to formal verification, "_the act of proving or disproving the correctness of intended algorithms underlying a system with respect to a certain formal specification or property, using formal methods of mathematics_ (from Wikipedia)". Formal verification requires multiple components 1) a target program, 2) a mathematical specification for the program, 3) a mathematical relation to define the consistency between the program and the specification, and proofs and a proof checker to actually show the correctness of the program and the specification. The below figure shows how key components in formal verification are related to others.

<Figure
  src="https://placehold.co/1200x600.png"
  alt="The key components of formal verification — program, specification, consistency relation, proof and proof checker — and how they relate"
/>

Formal verification has several granularities, and (as mentioned) it is the most strongest way to guarantee the correctness of the software (by showing the target software faithfully implements the rigorous specification). However, it is not practical due to the high verification cost. My main works are related to reducing the cost while fully facilitating the power of formal verification. To do that, we usually use modular way to separately verify multiple components in the software and compose those proofs together to show the entire correctness as the below figure shows.

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Modular verification: each component is verified separately and the proofs are composed into a whole-system correctness proof"
/>

We and our collaborators are working on formal verifications (and other methodologies which are mentioned above — e.g., fuzzing, program synthesis) for the following targets.

## Machine Learning Models (머신 러닝 모델)

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Illustration for the machine learning model verification work"
/>

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Modular specification and verification of a neural network"
/>

The Software 2.0 era has seen a significant increase in neural network-based software and services, raising concerns about potential costs related to neural network failures. Formal verification stands out as the singular approach to ultimately guarantee correctness, but challenges persist in the application of formal verification to this domain. Even state-of-the-art techniques for neural network verification face limitations in two crucial verification components. Current methodologies do not fully illustrate the complete behavior of neural networks as formal specifications; instead, these techniques primarily focus on local robustness. Furthermore, they continue to struggle with the efficient management of large-scale models and face challenges in achieving optimal reusability.

To address the stated challenges, our objective is to develop the foundational theory and methodology for neural network verification. Drawing inspiration from concepts in the formal verification of conventional software and considering the distinctive characteristics of neural network domains, we aim to create a methodology that precisely articulates multiple desired properties of target networks in a mathematically rigorous manner, without restricting the types of these properties. Furthermore, we put forward a modular verification approach based on both the stated specifications and the target network structure. We are confident that our endeavors will boost the reliability of neural networks, thereby opening pathways for building critical network-related applications and societal advancements.

## Distributed Systems and Blockchain (분산 시스템 및 블록체인)

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Illustration for the distributed systems and blockchain work"
/>

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Layered abstraction of a distributed service platform, from local machines up to user applications"
/>

A distributed service platform is a set of components unified by a management control plane that implements standard network services. Building a distributed service platform usually requires multiple local machines, a network to connect those local machines to others, distributed systems to provide the unified abstractions of those multiple local machines, and the application that we hope to provide for users.

The low-level parts of distributed systems are usually built with distributed consensus protocols that guarantees the consistency in a certain level. Among them, there are several strongly consistent protocols such as Paxos, Raft, and Chain-replication. They provides the strong guarantee that users view the same state regardless of any kinds of network and local machine errors in distributed systems. However, due to the complexity of those protocols, application builders usually use State Machine Replication (SMR) as a abstraction of those protocols that are used for the same purpose. However, SMR sacrifices possessing all possible behaviors (i.e., partial failures) of those protocols in the model. Therefore, we work on providing a proper but simple program abstraction for multiple distributed protocols and systems with formal verification.

Also, We provide template-driven protocol safety proof (linearizability) for developers to enable them not to consider distributed features while writing specifications and programs in their development.

This work also can be extended to multiple areas, especially for blockchain protocols and other distributed protocols and systems (e.g., weekly consistent protocols and systems).

## Operating Systems and Hypervisor (운영체제 및 가상화 머신)

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Illustration for the operating system and hypervisor verification work"
/>

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Security-critical components of a hypervisor and an operating system kernel"
/>

Operating systems and hypervisors are backbones of local machines. Furthermore, they are the backbone of any kind of software. We and our collaborators are building tools and security guarantee proofs for real world operating system and hypervisor codes.

Our main targets are 1) small key concurrent modules in Linux and 2) security critical parts of protected KVM, which will be the security base of the android ecosystem in the near future.

## Machine Learning Platforms (머신 러닝 플랫폼)

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Illustration for the machine learning platform analysis work"
/>

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Analysis and debugging tooling for machine learning platforms such as TensorFlow"
/>

People are using machine learning platforms to build and train their one machine learning models. Two most famous platforms are TensorFlow and PyTorch. We are working on developing tools for better analysis (including debugging) when using those platforms. We especially focus on TensorFlow.

## Smart Contracts (스마트 컨트랙트)

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Illustration for the smart contract verification work"
/>

<Figure
  src="https://placehold.co/1200x600.png"
  alt="Correctness checking and synthesis workflow for smart contracts"
/>

A smart contract is "_a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code_ (from Wikipedia)". Definitely, it is extremely sensitive to bugs and bleaches. Therefore, we are building the tool to improve the correctness guarantee for a smart contract.

A smart contract also usually requires checks from non-exports on programming. They should be exports on contract domains but may not have enough knowledge to check the programmed contracts. To resolve this, we work on smart contact synthesis.
