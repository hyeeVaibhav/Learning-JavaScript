// ============================================================
// JAVASCRIPT - NULLISH COALESCING OPERATOR (??)
// ============================================================

// The nullish coalescing operator (??) checks whether a value
// is `null` or `undefined`.
//
// If the value is null or undefined → returns the default value.
// Otherwise → returns the value itself.
//
// Syntax:
//
// value ?? defaultValue


let val1;


// ------------------------------------------------------------
// 1. VALUE IS NOT NULL OR UNDEFINED
// ------------------------------------------------------------

val1 = 5 ?? 10;

console.log(val1); // 5

// 5 is neither null nor undefined,
// so 5 is returned.


// ------------------------------------------------------------
// 2. VALUE IS NULL
// ------------------------------------------------------------

val1 = null ?? 10;

console.log(val1); // 10

// null is a nullish value,
// so the next value (10) is returned.


// ------------------------------------------------------------
// 3. VALUE IS UNDEFINED
// ------------------------------------------------------------

val1 = undefined ?? 10;

console.log(val1); // 10

// undefined is also a nullish value,
// so 10 is returned.


// ------------------------------------------------------------
// 4. MULTIPLE VALUES
// ------------------------------------------------------------

val1 = null ?? 10 ?? 15;

console.log(val1); // 10

// JavaScript checks from left to right:
//
// null → nullish → move to next
// 10   → not null/undefined → return 10
//
// Therefore, 10 is returned.
// 15 is not checked because a valid value was already found.


// ============================================================
// END NOTE / QUICK REVISION
// ============================================================

// ?? → checks ONLY for:
//      null
//      undefined
//
// Examples:
//
// 5 ?? 10          → 5
// null ?? 10       → 10
// undefined ?? 10  → 10
//
// Multiple values:
// null ?? 10 ?? 15 → 10
//
// IMPORTANT:
// `??` is different from `||`.
//
// `??` only considers null and undefined as missing values.
//
// ============================================================