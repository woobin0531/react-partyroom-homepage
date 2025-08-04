import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ICAL from "ical.js";
import "../styles/ReservationSection.css";
import priceImg from "../assets/price.png";

const RESERVATION_API =
  "https://api.spacecloud.kr/partner/reservations/ical?product_id=114737&ical_uid=ba7375f7";

const PACKAGES = [
  { key: "day", label: "낮타임(13~18시)" },
  { key: "night", label: "올나잇(19~익일 11시)" },
];

function getYMD(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const ReservationSection = () => {
  const [datePackages, setDatePackages] = useState({});
  const [activeDate, setActiveDate] = useState(null);
  const [selectedPkg, setSelectedPkg] = useState(null);

  useEffect(() => {
    fetch(RESERVATION_API)
      .then((res) => res.text())
      .then((data) => {
        const jcalData = ICAL.parse(data);
        const vcalendar = new ICAL.Component(jcalData);
        const vevents = vcalendar.getAllSubcomponents("vevent");
        const map = {};
        vevents.forEach((vevent) => {
          const event = new ICAL.Event(vevent);
          if (!event.startDate) return;
          const start = event.startDate.toJSDate();
          const h = start.getHours();
          const ymd = getYMD(start);
          if (!map[ymd]) map[ymd] = {};
          if (h >= 13 && h < 19) map[ymd].day = true;
          else if (h >= 19 || h < 11) map[ymd].night = true;
        });
        setDatePackages(map);
      })
      .catch(() => setDatePackages({}));
  }, []);

  const handleTileClick = (date) => {
    setActiveDate(getYMD(date));
    setSelectedPkg(null);
  };
  const handleSelectPkg = (pkg) => setSelectedPkg(pkg);

  const selectedStatus = activeDate ? datePackages[activeDate] || {} : {};

  return (
    <section id="reservation" className="reservation-section">
      <h2 className="section-title white-title">예약 하기</h2>
      <div className="reservation-content">
        <div className="calendar-container improved-calendar-bg">
          <Calendar
            tileClassName={() => ""}
            onClickDay={handleTileClick}
            firstDayOfWeek={1}
            locale="ko-KR"
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
          />
          <div className="calendar-legend">
            <span className="legend impossible">예약 불가</span>
          </div>
          {activeDate && (
            <div className="calendar-pkg-select-under-bar">
              <div className="calendar-selected-date">
                <b>{activeDate}</b>
              </div>
              <div className="calendar-btn-row">
                {PACKAGES.map((pkg) => {
                  const isBooked = selectedStatus[pkg.key];
                  const isSelected = selectedPkg === pkg.key;
                  return (
                    <button
                      key={pkg.key}
                      disabled={isBooked}
                      className={
                        "pkg-bar-btn" +
                        (isBooked ? " booked" : "") +
                        (isSelected ? " selected" : "")
                      }
                      onClick={() => handleSelectPkg(pkg.key)}
                      type="button"
                    >
                      {pkg.label} {isBooked ? "예약불가" : ""}
                    </button>
                  );
                })}
              </div>
              <div className="calendar-desc-red">
                가능한 날짜 확인하시고 <b>네이버</b> 혹은{" "}
                <b>스페이스클라우드</b> 버튼 클릭을 통해 이동하여 예약해주시거나{" "}
                <b>010-5643-4419</b> 연락주세요.
              </div>
            </div>
          )}
        </div>
        <div className="reservation-info tall-reservation-info">
          <h3>가격/예약설명</h3>
          <img src={priceImg} alt="가격표" className="price-image" />
          <div className="reservation-links">
            <a
              href="https://booking.naver.com/booking/12/bizes/1368850"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              네이버 예약
            </a>
            <a
              href="https://www.spacecloud.kr/space/69877"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              스페이스클라우드
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
