export function rubricPerfect(score) {
    if (score === 11) {
        return "Perfect";
    } else if (score >= 9) {
        return "Excellent";
    } else if (score >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}
