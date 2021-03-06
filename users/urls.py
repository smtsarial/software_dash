from django.urls import include, path

from users.serializers import ShuttleSerializer

from .views import   CarPoolingGroups, CustomUserDetailAPIView, CustomUserSettingsAPIView, DriverTripsAPIView, ShuttleAPIView, ShuttleDetailAPIView, ShuttleGroupAPIView, TravellerTripsAPIView, TravellerUserViewSet,  TripDetailAPIView, TripViewSet, UserBudgetAPIView, UserGroupAPIView, UserStarAPIView, UserViewSet

urlpatterns = [
    path('', UserViewSet.as_view()),
    path('travellers', TravellerUserViewSet.as_view()),
    path('user-balance/<int:pk>', UserBudgetAPIView.as_view()),
    path('user-star/<int:pk>', UserStarAPIView.as_view()),
    path('user-cargroup/<int:pk>', UserGroupAPIView.as_view()),
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls')),
    path('<int:pk>',CustomUserDetailAPIView.as_view(), name='user-information'),
    path('setting/<int:pk>',CustomUserSettingsAPIView.as_view(), name='settings-user'),
    path('create-trip',TripViewSet.as_view(), name='trip-create'),
    path('delete-trip/<int:pk>',TripDetailAPIView.as_view(), name='delete-trip-for-user' ),
    path('trips/traveller/<int:travellerId>',TravellerTripsAPIView.as_view(), name='traveller-trips' ),
    path('trips/driver/<int:driverId>',DriverTripsAPIView.as_view(), name='driver-trips' ),
    path('change-trip-status/<int:pk>',TripDetailAPIView.as_view(), name='change-trip-status'),
    path('carpooling/',CarPoolingGroups.as_view(), name='carpooling'),
    path('shuttles/',ShuttleAPIView.as_view(), name='shuttles'),
    path('shuttle/<int:pk>',ShuttleDetailAPIView.as_view(), name='shuttle-change'),
    path('shuttleGroup/<int:pk>', ShuttleGroupAPIView.as_view()),
]
