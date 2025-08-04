import React from "react";
import "../styles/AboutSection.css";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.jpg";

const cardData = [
  {
    img: p1,
    title: "🎥 나만의 감성 영화관",
    lines: [
      "대형 스크린과 빔프로젝터 완비",
      "넷플릭스, 유튜브, 디즈니+, 쿠팡플레이, 티빙 시청 가능",
      "친구들과 영화 마라톤, 연인과 로맨틱한 시간",
    ],
  },
  {
    img: p2,
    title: "포근한 소파베드 & 담요",
    lines: [
      "푹신한 소파베드와 넉넉한 담요 제공",
      "오래 머물러도 편안한 휴식 보장",
      "은은한 조명과 함께 감성적인 밤 완성",
    ],
  },
  {
    img: p3,
    title: "홈파티 완벽 지원",
    lines: [
      "조리도구와 식기류 완비",
      "간단한 요리부터 분위기 있는 식사까지",
      "전자레인지 · 전기포트 · 가스레인지 사용 가능",
    ],
  },
  {
    img: p4,
    title: "다양한 잔과 요리 가능",
    lines: [
      "접시, 샴페인잔, 맥주잔, 소주잔, 와인잔 구비",
      "가벼운 안주부터 근사한 요리까지 연출 가능",
      "와인과 함께 분위기 있는 홈파티 완성",
    ],
  },
  {
    img: p5,
    title: "편리한 접근성과 위치",
    lines: [
      "신용산역 1번 출구 도보 5분",
      "24시간 편의점 바로 앞",
      "용리단길 맛집 & 술집 근처\n아이파크몰 · CGV 10분 거리",
    ],
  },
  {
    img: p6,
    title: "쾌적한 실내 환경",
    lines: [
      "내부 화장실 완비로 편리함 제공",
      "겨울엔 바닥 난방, 여름엔 강력한 에어컨",
      "감성 인테리어 + 은은한 조명으로 분위기 업",
    ],
  },
];

const AboutSection = () => (
  <section id="about" className="about-section">
    <h2 className="about-title">공간 소개</h2>
    <div className="about-card-grid">
      {cardData.map((card, i) => (
        <div className="about-card" key={i}>
          <img className="about-card-img" src={card.img} alt={card.title} />
          <div className="about-card-body">
            <h3>{card.title}</h3>
            {card.lines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection;
