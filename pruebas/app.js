// Minimal global state
// Helpers
const $ = (sel) => document.querySelector(sel);

function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n | 0));
}

function tableFor(n) {
    const t = document.createElement("table");
    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const td = document.createElement("td");
            const inp = document.createElement("input");
            inp.type = "number";
            inp.step = "1";
            inp.placeholder = "0";
            td.appendChild(inp);
            tr.appendChild(td);
        }
        t.appendChild(tr);
    }
    return t;
}

function readMatrix(container) {
    const t = container.querySelector("table");
    const n = t ? t.rows.length : 0;
    const out = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            const v = t.rows[i].cells[j].firstChild.value.trim();
            row.push(v === "" ? 0 : parseInt(v, 10));
        }
        out.push(row);
    }
    return out;
}

function renderMatrix(container, M) {
    if (!M.length) { container.innerHTML = ""; return; }

    const n = M.length;
    const t = document.createElement("table");
    t.className = "matrix result-matrix";   //  add classes

    for (let i = 0; i < n; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            const td = document.createElement("td");
            td.className = "matrix-cell";       //  add cell class
            td.textContent = M[i][j];
            tr.appendChild(td);
        }
        t.appendChild(tr);
    }

    container.innerHTML = "";
    container.appendChild(t);
}


// Operations
function add(A, B) {
    const n = A.length;
    const R = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            R[i][j] = A[i][j] + B[i][j];
        }
    }
    return R;
}

function sub(A, B) {
    const n = A.length;
    const R = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            R[i][j] = A[i][j] - B[i][j];
        }
    }
    return R;
}

function mul(A, B) {
    const n = A.length;
    const R = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let s = 0;
            for (let k = 0; k < n; k++) s += A[i][k] * B[k][j];
            R[i][j] = s;
        }
    }
    return R;
}

// UI wiring
document.querySelectorAll("button[data-op]").forEach((btn) => {
    btn.addEventListener("click", () => {
        op = btn.dataset.op;
        opLabel.textContent = `(current: ${op})`;
    });
});

$("#make").addEventListener("click", () => {
    const n = clamp(parseInt(sizeN.value, 10) || 3, 2, 5);
    sizeN.value = n;
    boxA.innerHTML = "";
    boxB.innerHTML = "";
    boxR.innerHTML = "";
    boxA.appendChild(tableFor(n));
    boxB.appendChild(tableFor(n));
    matrizA = [];
    matrizB = [];
    matrizResultado = [];
});

$("#compute").addEventListener("click", () => {
    matrizA = readMatrix(boxA);
    matrizB = readMatrix(boxB);
    matrizResultado =
        op === "sum"
            ? add(matrizA, matrizB)
            : op === "rest"
                ? sub(matrizA, matrizB)
                : mul(matrizA, matrizB);
    renderMatrix(boxR, matrizResultado);
});
// Add these near your other constants:
let op = 'sum';
const opButtons = document.querySelectorAll('button[data-op]');
// Add this function:
function updateOpUI() {
    opButtons.forEach(btn => {
        const active = btn.dataset.op === op;
        btn.setAttribute('aria-pressed', active);
        btn.classList.toggle('primary', active); // moves the blue style
    });
}

// Wire it up (after DOM is ready):
opButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        op = btn.dataset.op;
        updateOpUI();
    });
});

// Ensure correct initial highlight:
updateOpUI();

// Default build
$("#make").click();
