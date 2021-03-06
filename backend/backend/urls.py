from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django_pydenticon.views import image as pydenticon_image

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include("accounts.urls")),
    path('identicon/image/<path:data>.png', pydenticon_image, name='pydenticon_image'),
    path('', include("instagram.urls")),
]

if settings.DEBUG:
    # MEDIA_URL (/media/) 경로로 오게 되면, media_root 경로에 있는 파일을 찾아 반환하겠다.
    # static은 debug가 false이면 빈베이스를 반환함.
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    #debug_toolbar 디버그일 때 사용
    import debug_toolbar
    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]