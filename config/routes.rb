Rails.application.routes.draw do
  get 'hello/index'
  root to: 'hello#index'
  post 'relationships'     => 'relationships#create'
  post 'test'     => 'test#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
