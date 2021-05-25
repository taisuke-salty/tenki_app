class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable,:trackable, :validatable,
        :lockable
        #  :timeoutable
        # :confirmable

  has_many :cards
  has_many :conditions
end
