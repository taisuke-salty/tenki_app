Rails.application.routes.draw do
  get 'conditions/index'
  get 'conditions/create'
  get 'conditions/show'
  get 'conditions/edit'
  get 'conditions/destroy'
  get 'conditions/new'
  get 'conditions/update'
  devise_for :users
  root to: 'nikki#index'
  # root to: 'hello#index'

  resources :nikki do                     #tweets_controllerに対してのresourcesメソッド
  end

  get "conditions/index" => "conditions#index"    #使用しない→後ほど削除
  get "conditions/new" => "conditions#new"
  post "conditions/create" => "conditions#create"
  get "conditions/:id/edit" => "conditions#edit"
  post "conditions/:id/update" => "conditions#update"
  post "conditions/:id/destroy" => "conditions#destroy"
  get "conditions/:id" => "conditions#show"      #使用しない→後ほど削除

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
