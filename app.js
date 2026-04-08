const projectData = [
  {
    id: "PJT-001",
    name: "성수 복합개발 신축공사",
    client: "성수개발 주식회사",
    dept: "구조·BIM팀",
    pm: "김현수 실장",
    status: "진행중",
    orderDate: "2026-03-05",
    startDate: "2026-03-18",
    dueDate: "2026-08-30",
    delayReasonRequired: true,
    delayReasonApproved: true,
    delayReasonText: "수주 직후 기존 선행 프로젝트 마감 일정과 중복되어 즉시 착수가 불가하여 부서장이 착수 지연 사유서를 작성함. 이후 상부 승인 완료 후 2026-03-18 착수 처리.",
    orderHistory: [
      "2026-03-05 : 프로젝트 수주 등록",
      "2026-03-06 : 즉시 착수 불가 상태로 변경",
      "2026-03-07 : 부서장 착수 지연 사유서 작성",
      "2026-03-10 : 상부 승인 완료",
      "2026-03-18 : 프로젝트 착수일 등록"
    ],
    completionChanged: true,
    completionHistory: [
      "2026-03-05 : 최초 완료예정일 2026-08-20 등록",
      "2026-04-02 : 외부 협력사 도면 반영 지연으로 완료예정일 2026-08-30으로 변경"
    ],
    meetings: [
      {
        date: "2026-03-08",
        title: "착수 전 외부 협력사 킥오프 미팅",
        author: "박용진",
        body: "회의 목적: 프로젝트 착수 전 협업 범위 정리\n참석자: 발주처 담당자, 구조 PM, 외부 협력사\n주요 내용:\n- 구조/마감 산출 제출 기준 공유\n- 도면 납품 포맷 협의\n- 주간 회의 운영 주기 확정"
      },
      {
        date: "2026-03-22",
        title: "1차 진행 상황 점검 회의",
        author: "이정민",
        body: "회의 목적: 1차 업무 진행률 검토\n주요 내용:\n- 구조 파트 선행 물량 산출 진행 현황 공유\n- 마감팀 초기 투입 시점 조정\n- 향후 납품 차수 기준 정리"
      }
    ],
    assignments: [
      {
        category: "구조",
        teams: [
          { name: "기초", members: ["팀장", "직원1", "직원2", "직원3"] },
          { name: "주차장 수평", members: ["팀장", "직원1", "직원2", "직원3"] },
          { name: "주차장 수직", members: ["팀장", "직원1", "직원2", "직원3"] },
          { name: "아파트 수평", members: ["팀장", "직원1", "직원2", "직원3"] },
          { name: "아파트 수직", members: ["팀장", "직원1", "직원2", "직원3"] }
        ]
      },
      {
        category: "마감",
        teams: [
          { name: "내부", members: ["팀장", "직원1", "직원2", "직원3"] },
          { name: "외부", members: ["팀장", "직원1", "직원2", "직원3"] },
          { name: "조적", members: ["팀장", "직원1", "직원2", "직원3"] },
          { name: "창호", members: ["팀장", "직원1", "직원2", "직원3"] }
        ]
      },
      {
        category: "토목",
        teams: [
          { name: "토목", members: ["팀장", "직원1", "직원2", "직원3"] }
        ]
      },
      {
        category: "클레임",
        teams: [
          { name: "클레임", members: ["팀장", "직원1", "직원2", "직원3"] }
        ]
      },
      {
        category: "ES",
        teams: [
          { name: "ES", members: ["팀장", "직원1", "직원2", "직원3"] }
        ]
      }
    ],
    emails: [
      {
        date: "2026-03-09",
        type: "수신",
        from: "abc@partner.com",
        to: "pm@concost.co.kr",
        subject: "[성수 복합개발] 도면 전달 일정 문의"
      },
      {
        date: "2026-03-10",
        type: "발신",
        from: "pm@concost.co.kr",
        to: "abc@partner.com",
        subject: "[성수 복합개발] 도면 전달 일정 회신"
      },
      {
        date: "2026-03-20",
        type: "수신",
        from: "client@sungsu.com",
        to: "manager@concost.co.kr",
        subject: "[성수 복합개발] 1차 납품 항목 확인"
      }
    ],
    deliveries: [
      {
        round: "1차 납품",
        date: "2026-04-10",
        fileName: "성수복합개발_1차납품자료.zip",
        approved: false
      },
      {
        round: "2차 납품",
        date: "2026-05-12",
        fileName: "성수복합개발_2차납품자료.zip",
        approved: true
      },
      {
        round: "3차 납품",
        date: "2026-06-07",
        fileName: "성수복합개발_3차납품자료.zip",
        approved: false
      }
    ]
  },
  {
    id: "PJT-002",
    name: "송도 주상복합 개발사업",
    client: "송도도시개발",
    dept: "마감팀",
    pm: "최민우 팀장",
    status: "진행중",
    orderDate: "2026-02-20",
    startDate: "2026-02-20",
    dueDate: "2026-07-25",
    delayReasonRequired: false,
    delayReasonApproved: false,
    delayReasonText: "즉시 착수 가능",
    orderHistory: [
      "2026-02-20 : 프로젝트 수주 등록",
      "2026-02-20 : 즉시 착수 처리"
    ],
    completionChanged: false,
    completionHistory: [
      "2026-02-20 : 최초 완료예정일 2026-07-25 등록"
    ],
    meetings: [
      {
        date: "2026-02-21",
        title: "송도 주상복합 착수 회의",
        author: "최민우",
        body: "프로젝트 착수 직후 회의록\n- 마감 범위 정리\n- 외부/내부/창호 세부 일정 공유"
      }
    ],
    assignments: [
      {
        category: "구조",
        teams: [
          { name: "기초", members: ["팀장", "직원1", "직원2", "직원3"] },
          { name: "주차장 수평", members: ["팀장", "직원1", "직원2", "직원3"] }
        ]
      },
      {
        category: "마감",
        teams: [
          { name: "내부", members: ["팀장", "직원1", "직원2", "직원3"] },
          { name: "외부", members: ["팀장", "직원1", "직원2", "직원3"] },
          { name: "조적", members: ["팀장", "직원1", "직원2", "직원3"] },
          { name: "창호", members: ["팀장", "직원1", "직원2", "직원3"] }
        ]
      },
      {
        category: "토목",
        teams: [
          { name: "토목", members: ["팀장", "직원1", "직원2", "직원3"] }
        ]
      },
      {
        category: "클레임",
        teams: [
          { name: "클레임", members: ["팀장", "직원1", "직원2", "직원3"] }
        ]
      },
      {
        category: "ES",
        teams: [
          { name: "ES", members: ["팀장", "직원1", "직원2", "직원3"] }
        ]
      }
    ],
    emails: [
      {
        date: "2026-02-25",
        type: "수신",
        from: "team@partner.com",
        to: "finish@concost.co.kr",
        subject: "[송도 주상복합] 외부 마감 검토 요청"
      },
      {
        date: "2026-03-02",
        type: "발신",
        from: "finish@concost.co.kr",
        to: "team@partner.com",
        subject: "[송도 주상복합] 외부 마감 검토 회신"
      }
    ],
    deliveries: [
      {
        round: "1차 납품",
        date: "2026-03-28",
        fileName: "송도주상복합_1차납품자료.zip",
        approved: true
      },
      {
        round: "2차 납품",
        date: "2026-04-22",
        fileName: "송도주상복합_2차납품자료.zip",
        approved: false
      }
    ]
  }
];

let currentProjectIndex = 0;

const projectListEl = document.getElementById("projectList");
const modalEl = document.getElementById("modal");
const modalTitleEl = document.getElementById("modalTitle");
const modalBodyEl = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModalBtn");

const btnSimulateDelay = document.getElementById("btnSimulateDelay");
const btnSimulateApprove = document.getElementById("btnSimulateApprove");
const btnSimulateScheduleChange = document.getElementById("btnSimulateScheduleChange");

function init() {
  renderProjectList();
  renderProject(currentProjectIndex);
  bindEvents();
}

function bindEvents() {
  closeModalBtn.addEventListener("click", closeModal);

  modalEl.addEventListener("click", (e) => {
    if (e.target === modalEl) closeModal();
  });

  btnSimulateDelay.addEventListener("click", simulateDelayReason);
  btnSimulateApprove.addEventListener("click", simulateApproval);
  btnSimulateScheduleChange.addEventListener("click", simulateCompletionChange);
}

function renderProjectList() {
  projectListEl.innerHTML = "";

  projectData.forEach((project, index) => {
    const item = document.createElement("button");
    item.className = `project-item ${index === currentProjectIndex ? "active" : ""}`;
    item.type = "button";
    item.innerHTML = `
      <div class="project-item-title">${escapeHtml(project.name)}</div>
      <div class="project-item-sub">
        ${escapeHtml(project.client)}<br />
        PM: ${escapeHtml(project.pm)}
      </div>
    `;
    item.addEventListener("click", () => {
      currentProjectIndex = index;
      renderProjectList();
      renderProject(index);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    projectListEl.appendChild(item);
  });
}

function renderProject(index) {
  const project = projectData[index];

  document.getElementById("projectTitle").textContent = project.name;
  document.getElementById("projectSubtitle").textContent = `${project.client} / 담당부서 ${project.dept} / PM ${project.pm}`;
  document.getElementById("projectStatusBadge").textContent = project.status;

  document.getElementById("summaryProjectName").textContent = project.name;
  document.getElementById("summaryClient").textContent = project.client;
  document.getElementById("summaryDept").textContent = project.dept;
  document.getElementById("summaryPm").textContent = project.pm;
  document.getElementById("summaryOrderDate").textContent = project.orderDate;
  document.getElementById("summaryStartDate").textContent = project.startDate || "미정";
  document.getElementById("summaryDueDate").textContent = project.dueDate;
  document.getElementById("summaryDeliveryCount").textContent = `${project.deliveries.length}차`;

  renderMeetings(project.meetings);
  renderAssignments(project.assignments);
  renderEmails(project.emails);
  renderOrder(project);
  renderCompletion(project);
  renderDeliveries(project.deliveries);
}

function renderMeetings(meetings) {
  const tbody = document.getElementById("meetingTableBody");
  tbody.innerHTML = "";

  meetings.forEach((meeting) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(meeting.date)}</td>
      <td>${escapeHtml(meeting.title)}</td>
      <td>${escapeHtml(meeting.author)}</td>
      <td><button class="detail-link" type="button">열기</button></td>
    `;
    tr.querySelector("button").addEventListener("click", () => {
      openModal(meeting.title, `${meeting.date}\n작성자: ${meeting.author}\n\n${meeting.body}`);
    });
    tbody.appendChild(tr);
  });
}

function renderAssignments(assignments) {
  const wrap = document.getElementById("assignmentGrid");
  wrap.innerHTML = "";

  assignments.forEach((group) => {
    const card = document.createElement("div");
    card.className = "assignment-card";

    const teamsHtml = group.teams.map((team) => `
      <div class="team-block">
        <div class="team-name">${escapeHtml(team.name)}</div>
        <div class="member-list">
          ${team.members.map((member) => `<span class="member-chip">${escapeHtml(member)}</span>`).join("")}
        </div>
      </div>
    `).join("");

    card.innerHTML = `
      <div class="assignment-head">
        <h3>${escapeHtml(group.category)}</h3>
        <span>${group.teams.length}개 팀</span>
      </div>
      <div class="assignment-body">
        ${teamsHtml}
      </div>
    `;

    wrap.appendChild(card);
  });
}

function renderEmails(emails) {
  const tbody = document.getElementById("emailTableBody");
  tbody.innerHTML = "";

  emails.forEach((mail) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(mail.date)}</td>
      <td>${escapeHtml(mail.type)}</td>
      <td>${escapeHtml(mail.from)}</td>
      <td>${escapeHtml(mail.to)}</td>
      <td>${escapeHtml(mail.subject)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderOrder(project) {
  document.getElementById("orderDateBox").textContent = project.orderDate;
  document.getElementById("startDateBox").textContent = project.startDate || "미정";
  document.getElementById("delayReasonStatus").textContent = project.delayReasonRequired ? "작성 필요 / 작성됨" : "해당 없음";
  document.getElementById("approvalStatus").textContent = project.delayReasonApproved ? "승인 완료" : "대기";
  document.getElementById("delayReasonText").textContent = project.delayReasonText;

  const list = document.getElementById("orderHistoryList");
  list.innerHTML = "";
  project.orderHistory.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderCompletion(project) {
  document.getElementById("currentCompletionDate").textContent = project.dueDate;
  document.getElementById("completionChangedStatus").textContent = project.completionChanged ? "변경 이력 있음" : "변경 없음";

  const list = document.getElementById("completionHistoryList");
  list.innerHTML = "";
  project.completionHistory.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderDeliveries(deliveries) {
  const tbody = document.getElementById("deliveryTableBody");
  tbody.innerHTML = "";

  deliveries.forEach((delivery, index) => {
    const tr = document.createElement("tr");
    const approvalText = delivery.approved ? "실장 승인 완료" : "실장 승인 필요";

    tr.innerHTML = `
      <td>${escapeHtml(delivery.round)}</td>
      <td>${escapeHtml(delivery.date)}</td>
      <td>${escapeHtml(delivery.fileName)}</td>
      <td>${approvalText}</td>
      <td><button class="detail-link" type="button">${delivery.approved ? "다운로드" : "승인요청"}</button></td>
    `;

    tr.querySelector("button").addEventListener("click", () => {
      if (delivery.approved) {
        openModal("다운로드 가능", `${delivery.round}\n${delivery.fileName}\n\n실장 승인 완료 상태이므로 다운로드 가능합니다.`);
      } else {
        openModal("승인 요청 생성", `${delivery.round}\n${delivery.fileName}\n\n현재 상태: 실장 승인 필요\n다운로드 요청이 생성되었습니다.`);
      }
    });

    tbody.appendChild(tr);
  });
}

function simulateDelayReason() {
  const project = projectData[currentProjectIndex];

  if (project.delayReasonRequired && project.delayReasonText !== "즉시 착수 가능") {
    openModal("안내", "이미 착수 지연 사유서가 작성된 프로젝트입니다.");
    return;
  }

  project.delayReasonRequired = true;
  project.delayReasonApproved = false;
  project.delayReasonText = "수주 시점에 즉시 착수가 불가하여 부서장이 착수 지연 사유서를 작성함. 현재 상부 승인 대기 중.";
  project.orderHistory.push(`${todayText()} : 부서장 착수 지연 사유서 작성`);
  renderProject(currentProjectIndex);
  openModal("처리 완료", "착수 지연 사유서가 작성되었습니다. 현재 상부 승인 대기 상태입니다.");
}

function simulateApproval() {
  const project = projectData[currentProjectIndex];

  if (!project.delayReasonRequired) {
    openModal("안내", "이 프로젝트는 지연 사유서가 필요한 상태가 아닙니다.");
    return;
  }

  if (project.delayReasonApproved) {
    openModal("안내", "이미 상부 승인 완료 상태입니다.");
    return;
  }

  project.delayReasonApproved = true;
  if (!project.startDate || project.startDate === "미정") {
    project.startDate = todayText();
  }
  project.orderHistory.push(`${todayText()} : 상부 승인 완료 및 착수일 등록`);
  renderProject(currentProjectIndex);
  openModal("승인 완료", `상부 승인이 완료되었습니다.\n착수일: ${project.startDate}`);
}

function simulateCompletionChange() {
  const project = projectData[currentProjectIndex];
  const oldDate = project.dueDate;
  const newDate = addDaysToDate(oldDate, 10);

  project.dueDate = newDate;
  project.completionChanged = true;
  project.completionHistory.push(`${todayText()} : 외부 일정 변경 사유로 완료예정일 ${newDate} 로 변경`);
  renderProject(currentProjectIndex);
  openModal("완료일 변경", `기존 완료예정일: ${oldDate}\n변경 완료예정일: ${newDate}\n\n사유: 외부 협력 일정 변경`);
}

function openModal(title, body) {
  modalTitleEl.textContent = title;
  modalBodyEl.textContent = body;
  modalEl.classList.remove("hidden");
}

function closeModal() {
  modalEl.classList.add("hidden");
}

function todayText() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function addDaysToDate(dateText, days) {
  const date = new Date(dateText);
  if (Number.isNaN(date.getTime())) return dateText;
  date.setDate(date.getDate() + days);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
