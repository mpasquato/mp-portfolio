document.addEventListener('click', function (event)
{
    const closeButton = event.target.closest('.c_lightbox__fab--vr--close');

    if (closeButton)
    {
        event.preventDefault();
        history.back();
        return;
    }

    const wrapper = event.target.closest('.c_lightbox');

    if (wrapper && event.target === wrapper)
    {
        event.preventDefault();
        history.back();
    }
});