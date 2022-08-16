class AddSessionToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :session, :integer
  end
end
