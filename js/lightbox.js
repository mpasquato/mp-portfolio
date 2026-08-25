document.addEventListener('click', function (event)
{
    const closeButton = event.target.closest('.cmp-lightbox-fab__close');

    if (closeButton)
    {
        event.preventDefault();
        history.back();
        return;
    }

    const wrapper = event.target.closest('.cmp-lightbox-wrapper');

    if (wrapper && event.target === wrapper)
    {
        event.preventDefault();
        history.back();
    }
});