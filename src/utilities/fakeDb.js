const getPreviousApply = () => {
    let apply = {};
    const previousApply = localStorage.getItem('job-apply');
    if (previousApply) {
        apply = JSON.parse(previousApply);
    }
    return apply;
}

export default getPreviousApply;