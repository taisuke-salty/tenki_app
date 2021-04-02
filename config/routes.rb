Rails.application.routes.draw do
  # root to: 'nikki#index'
  root to: 'hello#index'

  resources :nikki do                     #tweets_controllerに対してのresourcesメソッド
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
