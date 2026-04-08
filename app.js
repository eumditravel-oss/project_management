function openProject() {
  document.getElementById('projectList').classList.add('hidden');
  document.getElementById('projectDetail').classList.remove('hidden');
}

function backToList() {
  document.getElementById('projectList').classList.remove('hidden');
  document.getElementById('projectDetail').classList.add('hidden');
}

function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
}

// 수주 로직
function requestReason() {
  alert("사유서 작성 완료 (임시)");
}

function approve() {
  document.getElementById('startDate').innerText = "착수일: 2026-04-05 (승인 완료)";
}

// 완료 변경
function changeComplete() {
  alert("완료일 변경 + 사유 입력 필요");
}

// 납품 다운로드
function requestDownload() {
  alert("실장 승인 요청됨");
}
