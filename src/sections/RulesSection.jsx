import React from "react";
import "../styles/RulesSection.css";

const RULES = [
  "청소보증금 3만원이 있습니다. 퇴실 후 이상 없을 경우 24시간 이내 환불됩니다.",
  "FIX YOU는 숙박업소가 아닌 파티룸입니다. 침구류 및 세면도구는 제공되지 않습니다.",
  "최대 4인까지 이용 가능하며, 2~3인 이용을 권장드립니다. 예약 인원 외 출입은 제한됩니다.",
  "심야 시간에는 소음을 자제해주세요. 이웃에게 불편을 줄 수 있습니다.",
  "객실 및 건물 내 흡연(전자담배 포함) 시 즉시 퇴실 조치되며 환불은 불가합니다.",
  "미성년자의 이용은 절대 불가합니다.",
  "안전을 위해 화기류의 반입 및 사용은 금지되어 있습니다.",
  "이용 중 발생한 사고 및 분실은 게스트의 책임이며, 당사는 책임지지 않습니다.",
  "예약 시간 내 입·퇴실을 준수해주세요. 퇴실 지연 및 무단 출입 시 연락 바랍니다.",
  "심한 냄새가 나는 음식(생선, 고기류 등)의 조리는 금지되어 있습니다.",
];

const RulesSection = () => (
  <section id="rules" className="rules-section">
    <h2>이용안내 및 규칙</h2>
    <ul className="rules-list">
      {RULES.map((rule, i) => (
        <li key={i} className="rule-item">
          <span className="rule-num">{i + 1}</span>
          <span className="rule-text">{rule}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default RulesSection;
