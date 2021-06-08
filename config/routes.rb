Rails.application.routes.draw do

  get 'analyze/a_day'  => "analyze#a_day"
  get 'analyze/today_day'  => "analyze#today_day"
  # get 'analyze/:year/:month/:day' => "analyze#a_day"

  get "conditions/index" => "conditions#index"    #使用しない→後ほど削除
  get "conditions/new" => "conditions#new"
  post "conditions/create" => "conditions#create"
  get "conditions/:id/edit" => "conditions#edit"
  post "conditions/:id/update" => "conditions#update"
  delete "conditions/:id/destroy" => "conditions#destroy"
  get "conditions/:id" => "conditions#show"

  get "cards/index" => "cards#index"    #使用しない→後ほど削除
  get "cards/new" => "cards#new"
  post "cards/create" => "cards#create"
  get "cards/:id/edit" => "cards#edit"
  post "cards/:id/update" => "cards#update"
  delete "cards/:id/destroy" => "cards#destroy"
  get "cards/:id" => "cards#show"



  devise_for :users
  root to: 'conditions#index'
  # root to: 'hello#index'

  resources :nikki do                     #tweets_controllerに対してのresourcesメソッド
  end



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
