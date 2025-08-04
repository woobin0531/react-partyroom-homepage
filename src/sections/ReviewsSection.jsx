import React, { useState, useEffect } from "react";
import "../styles/ReviewsSection.css";

function customConfirm(message, callback) {
  const overlay = document.createElement("div");
  overlay.className = "review-confirm-overlay";
  const modal = document.createElement("div");
  modal.className = "review-confirm-modal";
  modal.innerHTML = `
    <div class="review-confirm-message">${message}</div>
    <div class="review-confirm-btns">
      <button class="review-cancel">취소</button>
      <button class="review-ok">확인</button>
    </div>
  `;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  modal.querySelector(".review-cancel").onclick = () => {
    callback(false);
    document.body.removeChild(overlay);
  };
  modal.querySelector(".review-ok").onclick = () => {
    callback(true);
    document.body.removeChild(overlay);
  };
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState(() => {
    try {
      const stored = localStorage.getItem("reviews");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [form, setForm] = useState({ content: "", nickname: "", password: "" });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.content || !form.nickname || !form.password) {
      alert("후기, 닉네임, 비밀번호를 모두 입력해주세요!");
      return;
    }
    setReviews([...reviews, { ...form, id: Date.now() }]);
    setForm({ content: "", nickname: "", password: "" });
  };

  const handleDelete = (review) => {
    customConfirm("정말 삭제하시겠습니까?", (ok) => {
      if (!ok) return;
      const pw = window.prompt("비밀번호를 입력하세요:");
      if (pw === null) return;
      if (pw === review.password) {
        setReviews(reviews.filter((r) => r.id !== review.id));
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    });
  };

  const handleEdit = (review) => {
    customConfirm("수정하시겠습니까?", (ok) => {
      if (!ok) return;
      const pw = window.prompt("비밀번호를 입력하세요:");
      if (pw === null) return;
      if (pw !== review.password) {
        alert("비밀번호가 틀렸습니다.");
        return;
      }
      const newContent = window.prompt(
        "수정할 내용을 입력하세요:",
        review.content
      );
      if (newContent !== null && newContent !== review.content) {
        setReviews(
          reviews.map((r) =>
            r.id === review.id ? { ...r, content: newContent } : r
          )
        );
      }
    });
  };

  return (
    <section id="reviews" className="reviews-section">
      <h2>후기/리뷰</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <textarea
          name="content"
          rows={5}
          maxLength={320}
          placeholder="후기 입력!"
          value={form.content}
          onChange={handleChange}
          className="fixed-textarea"
        />
        <input
          name="nickname"
          maxLength={10}
          placeholder="닉네임"
          value={form.nickname}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          maxLength={16}
          autoComplete="new-password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
        />
        <button className="review-submit" type="submit">
          등록
        </button>
      </form>

      <div className="review-list">
        {reviews.length === 0 && (
          <div className="no-review">아직 등록된 후기가 없습니다.</div>
        )}
        {reviews
          .slice()
          .reverse()
          .map((r) => (
            <div className="review-item" key={r.id}>
              <div className="review-header">
                <span className="review-nickname">{r.nickname}</span>
              </div>
              <div className="review-content">{r.content}</div>
              <div className="review-actions">
                <button onClick={() => handleEdit(r)} className="review-edit">
                  수정
                </button>
                <button
                  onClick={() => handleDelete(r)}
                  className="review-delete"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
