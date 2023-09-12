export const exerciseOptions = {
    method: 'GET',
    url: 'https://workoutdb1.p.rapidapi.com/exercises',
    headers: {
        'X-RapidAPI-Key': '04ea2bba0dmsh75b6f20f72ad48ap1d9d52jsn3ab30229c3c6',
        'X-RapidAPI-Host': 'workoutdb1.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};